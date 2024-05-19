"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea"
type Props = {
  name: string;
  label: string;
  value: string | null;
  multiline?: boolean;
  liveUpdate?: boolean;
  formControl?: any
};

export function DataField(props: Props) {
  let displayVal = props.multiline ? <div dangerouslySetInnerHTML={{ __html: props.value ? props.value.replaceAll("\\n", "</br>") : "" }}></div> : props.value
  let isEmpty = false
  //displayVal = props.liveUpdate ? <Input defaultValue={String(displayVal)} /> : <Input defaultValue={String(displayVal)} />
  if (props.value == null || props.value == "") {
    displayVal = "נתון חסר"
    isEmpty = true
  }
  if (props.formControl == undefined) {
    return <></>
  }
  // TODO: Use memo? use callback?
  const getInput = (data: any) => {
    if(props.multiline) {
      return <Textarea placeholder={isEmpty ? String(props.value!.replaceAll("\\n", "\u000A")): ""} defaultValue={!isEmpty ? String(props.value!.replaceAll("\\n", "\u000A")): ""} {...data.field} />
    }
    return <Input placeholder={isEmpty ? String(displayVal): ""} defaultValue={!isEmpty ? String(displayVal): ""} {...data.field} />
  }
  return (
    <FormField
      control={props.formControl}
      name={props.name}

      render={(data) => (
        <FormItem>
          {/* <FormLabel>{props.name}</FormLabel> */}
          <FormControl>
            <div>
              {props.liveUpdate == true && <div className="flex gap-1 items-center">
                <p className="font-semibold">{props.label}: </p> {getInput(data)}
              </div>}
              {props.liveUpdate == false && <div className="flex gap-1 items-center">
                <p className="font-semibold">{props.label}: </p> {displayVal}
              </div>}
            </div>
          </FormControl>

          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  )
}
