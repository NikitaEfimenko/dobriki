'use client'
import { useState, ReactNode, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from "next-auth/react";

// import { register, unregister } from "../config/serviceWorkerRegistration"


export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  // useEffect(() => {
  //   register()
  //   console.log("register!")
  //   return () => unregister()
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  )
}