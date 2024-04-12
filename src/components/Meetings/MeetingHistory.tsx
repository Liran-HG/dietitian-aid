import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from "@/components/ui/separator"
import React, { Fragment } from 'react'

type Props = {
    userId: string;
  };
const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `פגישה משרדית`
  )
if(tags.length == 0) tags.push("אין פגישות קודמות");
function MeetingHistory(props:Props) {
  return (
    <ScrollArea className='max-h-48 w-full rounded-md border overflow-auto'>
        <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">היסטוריית פגישות:</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" key={tag+"_sep"}/>
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

export default MeetingHistory