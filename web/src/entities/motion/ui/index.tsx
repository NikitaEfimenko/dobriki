'use client'
import { useState } from 'react';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { useEffect } from 'react';
import type { AccelListenerEvent } from '@capacitor/motion';


const MotionComp = () => {
  const [motion, setMotion] = useState<AccelListenerEvent>()

  useEffect(() => {
    (async () => {
      try {
        const accelHandler: PluginListenerHandle = await Motion.addListener("accel", event => {
          console.log('Device motion event:', event);
          setMotion(event)
        });
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return <div className='text-sm'>
    <ul>
      <li>
        motion: {JSON.stringify(motion)}
      </li>
      <li>
      </li>
    </ul>
  </div>
}

export {
  MotionComp as Motion
}