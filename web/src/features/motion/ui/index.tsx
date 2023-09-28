'use client'
import { useState } from 'react';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { useEffect } from 'react';
import type { AccelListenerEvent } from '@capacitor/motion';
import { handleAccelerometerReading } from '@/shared/utils';


const MotionComp = () => {
  const [motion, setMotion] = useState<AccelListenerEvent>()
  const [stepCount, setStepCount] = useState<number>(0)
  const [error, setError] = useState("")

  useEffect(() => {
    
    (async () => {
      try {
        const accelHandler: PluginListenerHandle = await Motion.addListener("accel", event => {
          console.log('Device motion event:', event);
          setMotion(event)
          const acc = event.acceleration
          handleAccelerometerReading(acc.x, acc.y, acc.z, setStepCount)
        });
      } catch (e) {
        console.log(e)
        setError(e as string)
      }
    })()
  }, [])

  return <div className='text-sm'>
    <ul>
      <li>
        motion: {JSON.stringify(motion)}
      </li>
      <li>
        step-count {stepCount}
      </li>
      <li> 
        error - {error}
      </li>
      <li>
      </li>
    </ul>
  </div>
}

export {
  MotionComp as Motion
}