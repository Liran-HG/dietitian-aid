 
import { Button } from "@/components/ui/button"
 
export function ButtonIcon(props: {icon : React.ReactNode, text: string, className?: string}) {
  return (
    <Button variant="outline" className={props.className + " shadow-md"} size={props.text == "" ? "icon" : "default"}>
      {props.icon} {props.text ?? ""}
    </Button>
  )
}