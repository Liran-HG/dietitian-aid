"use client"
import { DirectionProvider } from "@radix-ui/react-direction"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useState} from "react"

// queryClient.setQueryDefaults(["patientMeetings"], {
//   broadcastQueryClient: true,
// });
export default function ClientProviders({
  children
}: {children: React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions:{
      queries:{
        // refetchOnWindowFocus: true,
        // staleTime: 1000 * 10,
        // refetchInterval: 1000 * 10,
      }
    }
  }))
  return (
    <QueryClientProvider client={queryClient}>
      <DirectionProvider dir="rtl">
        {children}
      </DirectionProvider>
    </QueryClientProvider>
  )
}
