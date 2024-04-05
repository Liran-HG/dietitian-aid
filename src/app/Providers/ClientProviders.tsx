"use client"
import { DirectionProvider} from "@radix-ui/react-direction"

export default function ClientProviders({
    children
  }: any) {
    // TODO: remove any, check why it's bugging
    // Readonly<{
    //     children: React.ReactNode;
    //   }>
  return (
    <DirectionProvider dir="rtl">
      {children}
    </DirectionProvider>
  )
}
