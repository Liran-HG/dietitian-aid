"use client"
import { DirectionProvider} from "@radix-ui/react-direction"

export default function ClientProviders({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <DirectionProvider dir="rtl">{children}</DirectionProvider>
  )
}
