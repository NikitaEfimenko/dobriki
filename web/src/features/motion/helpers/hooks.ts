'use client'
import { usePrevious } from '@/shared/hooks';
import { Geolocation } from '@capacitor/geolocation';
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef, useMemo } from 'react';
import type { Position } from '@capacitor/geolocation';

import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import type { AccelListenerEvent } from '@capacitor/motion';
import { QueueKeys, Activity, ActivityTypes } from '../types';
import { useToast } from "@/shared/ui/use-toast"

import { calcPersonSpecific, calculateCalories, calculateHorizontalDistance, calculateSteps } from './utils';
import axios from 'axios';
import { usePresence } from '@ably-labs/react-hooks';


export const useMotionActivity = () => {
  const [motion, setMotion] = useState<AccelListenerEvent>()
  const ref = useRef<PluginListenerHandle>();

  useEffect(() => {
    (async () => {
      const accelHandler: PluginListenerHandle = await Motion.addListener("accel", event => {
        console.log('Device motion event:', event);
        setMotion(event)
        ref.current = accelHandler
        // handleAccelerometerReading(acc.x, acc.y, acc.z, setStepCount)
      });
    })()
  }, [])
  return [
    motion,
    ref.current
  ]
}

const sync = async (data?: any) => {
  await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}activity/sync`, {
    data: "save"
  })
}

export const useSensorSync = (team: string, activityValues: Activity & { isTracking: boolean }) => {
  const { toast } = useToast()
  useQuery({
    queryKey: [QueueKeys.SYNC], 
    queryFn: sync,
    refetchInterval: 20000,
    onSuccess: (data) => {
      toast({
        title: "Успешно синхронизировали данные в service worker",
        description: Date.now(),
      })
    }
  });

  useEffect(() => {
    return () => {
      (async () => {
        await sync()
      })()
    }
  }, [])

  const [_, updateStatus] = usePresence<typeof activityValues>(team);

  return updateStatus
}


type useActivityConfig = {
  autotrack?: boolean,
  activity: typeof ActivityTypes[keyof typeof ActivityTypes],
}

const getCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();
  return coordinates
}

const team = "team"

const getActivity = (type: typeof ActivityTypes[keyof typeof ActivityTypes], distance: number) => {
  const { stepLength, specificCalories } = calcPersonSpecific()

  const stepCount = calculateSteps(distance, stepLength)
  const calories = calculateCalories(stepCount, stepLength, specificCalories)
  
  return {
    stepCount,
    calories,
    distance,
    type
  } satisfies Activity
}


export const useActivity = (config: useActivityConfig = {
  activity: ActivityTypes.Rest
}) => {
  const [coordinates, setCoordinates] = useState<Position>()
  const previous = usePrevious(coordinates)
  const [distance, setDistance] = useState<number>()

  const [isTracking, setIsTracking] = useState(config.autotrack ?? false)

  const [currentActivity, setCurrentActivity] = useState(config.activity)

  useQuery({
    queryKey: ["activity", currentActivity],
    queryFn: getCurrentPosition,
    refetchInterval: 10000,
    onSuccess: (data) => {
      setCoordinates(data)
    },
    enabled: !!isTracking && (currentActivity != ActivityTypes.Rest)
  })


  useEffect(() => {
    setDistance(prev => {
      if (!coordinates?.coords || !previous?.coords) {
        return prev
      }
      const prevCoord = previous?.coords
      const coord = coordinates?.coords
      const [lat1, lon1, alt1] = [prevCoord?.latitude, prevCoord?.longitude, prevCoord?.altitude]
      const [lat2, lon2, alt2] = [coord?.latitude, coord?.longitude, coord?.altitude]

      const distance = calculateHorizontalDistance(lat1, lon1, alt1 ?? 0, lat2, lon2, alt2 ?? 0)

      return (prev ?? 0) + distance
    })
  }, [coordinates, previous])

  const activityValues = useMemo(() => getActivity(currentActivity, distance ?? 0), [currentActivity, distance])

  const memoized = useMemo(() => ({...activityValues, isTracking }), [activityValues, isTracking])

  const updateStatus = useSensorSync(team, memoized)

  const [subscibe, unsubscribe, switchActivity] = useMemo(() => {
    return [
      () => {
        setIsTracking(true)
        updateStatus({...activityValues, isTracking: true })
      },
      () => {
        setIsTracking(true)
        updateStatus({...activityValues, isTracking: false })
      },
      (newActivity: typeof ActivityTypes[keyof typeof ActivityTypes]) => {
        setCurrentActivity(newActivity)
        updateStatus({...activityValues, isTracking: isTracking, type: newActivity })
      }
    ]
  }, [])

  const calculatedActivity = useMemo(() => getActivity(currentActivity, distance ?? 0), [currentActivity, distance])

  return {
    position: coordinates,
    activities: calculatedActivity,
    actions: {
      subscibe,
      unsubscribe,
      switchActivity
    }
  }
}

