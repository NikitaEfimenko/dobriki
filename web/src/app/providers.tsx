'use client'
import { useState, ReactNode, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { register, unregister } from "../config/serviceWorkerRegistration"

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    register()
    console.log("register!")
    return () => unregister()
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}