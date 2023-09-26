'use client'
import { Geolocation } from '@capacitor/geolocation';
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { usePrevious } from '@/shared/hooks';
import type { Position } from '@capacitor/geolocation';
import { useEffect } from 'react';
import { calculateSteps } from '@/shared/utils';

const Position = () => {  
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

  return <div className='text-sm'>
    <ul>
      <li>
        latitude:{JSON.stringify(data?.coords.latitude)}
      </li>
      <li>
        longitude:{JSON.stringify(data?.coords.longitude)}
      </li>
      <li>
        altitude:{JSON.stringify(data?.coords.altitude)}
      </li>
      <li>
        count_step_by_coord: {count.toFixed(2)}
      </li>
    </ul>
  </div>
}

export { Position };
