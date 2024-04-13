import React, { PropsWithChildren } from 'react'

import {
    TableHead as TH,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';

export type TableHeaderProps = {
    useLTR?: boolean,
    className?:string
}
function TableHead(props: PropsWithChildren<TableHeaderProps>) {
    const classes = cn(props.className,props.useLTR ? "" : "text-right")
    return (
        <TH className={classes}>{props.children}</TH>
    )
}

export default TableHead