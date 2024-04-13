 "use client";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
 
export function ButtonIcon(props: {icon : React.ReactNode, text: string, className?: string, onClick?: Function}) {
  return (
    <Button variant="outline" className={cn("shadow-md",props.className)} size={props.text == "" ? "icon" : "default"} onClick={() => {
      props.onClick?.()
    }}>
      {props.icon} {props.text ?? ""}
    </Button>
  )
}