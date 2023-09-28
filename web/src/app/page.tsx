import Image from 'next/image'
import { Suspense, } from 'react';
import dynamic from 'next/dynamic';
import { LogInIcon } from 'lucide-react';
import { LoginButton } from '@/features/loginButton';

const Routemap = dynamic(() => import("@/widgets/routemap").then(c => ({ default: c.Routemap })))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
      </div>

      <div className="relative flex place-items-center">
        <LoginButton/>
        <Routemap/>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className='flex flex-col gap-6 items-center justify-center'>

        </div>
      </div>
    </main>
  )
}
