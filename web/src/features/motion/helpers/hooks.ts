import { calculateSteps } from '@/shared/utils';
import { usePrevious } from '@/shared/hooks';
import { Geolocation } from '@capacitor/geolocation';
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from 'react';
import type { Position } from '@capacitor/geolocation';

import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import type { AccelListenerEvent } from '@capacitor/motion';
import { handleAccelerometerReading } from '@/shared/utils';

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

export const useWalkActivity = () => {
  const [coordinates, setCoordinates] = useState<Position>()
  const previous = usePrevious(coordinates)
  const [count, setCount] = useState(0)

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates
  }

  const { data } = useQuery({
    queryKey: ["position"],
    queryFn: getCurrentPosition,
    refetchInterval: 500,
    onSuccess: (data) => {
      setCoordinates(data)
    }
  })

  useEffect(() => {
    setCount(count => {
      if (!coordinates?.coords || !previous?.coords) {
        return count
      }
      const prevCoord = previous?.coords
      const coord = coordinates?.coords
      const [lat1, lon1, alt1] = [prevCoord?.latitude, prevCoord?.longitude, prevCoord?.altitude]
      const [lat2, lon2, alt2] = [coord?.latitude, coord?.longitude, coord?.altitude]
      return count + calculateSteps(lat1 ?? 0, lon1 ?? 0, alt1 ?? 0, lat2 ?? 0, lon2 ?? 0, alt2 ?? 0)
    })
  }, [coordinates, previous])

  return {
    position: coordinates,
    activities: {
      stepCount: count
    }
  }
}