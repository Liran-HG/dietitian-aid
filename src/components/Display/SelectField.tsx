import React from 'react'
import { FormControl, FormField, FormItem } from '../ui/form';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


type Props = {
    name: string;
    label: string;
    value: string | null;
    values: [string,string][];
    liveUpdate?: boolean;
    formControl?: any
};
export default function SelectField(props: Props) {
    let displayVal = props.values.find(e => e[0] == props.value)?.[1]
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
        return <Select {...data.field}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={String(displayVal)} />
            </SelectTrigger>
            <SelectContent>
                {props.values.map(([key,value]) => <SelectItem key={key} value={key}>{value}</SelectItem>)}
            </SelectContent>
        </Select>
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


