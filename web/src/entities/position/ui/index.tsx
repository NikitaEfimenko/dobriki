'use client'
import { Geolocation } from '@capacitor/geolocation';
import { useQuery } from "@tanstack/react-query";


const Position = () => {  
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates
  }

  const { data } = useQuery({ queryKey: ["position"], queryFn: getCurrentPosition, refetchInterval: 1000})
  
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
    </ul>
  </div>
}

export { Position };
