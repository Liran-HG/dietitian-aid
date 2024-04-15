

import { DisplayMeetingType } from '@/models/Meetings/MeetingDetails'
import React, { Fragment } from 'react'
import { Separator } from '../ui/separator'
import { timeDiffInMinutes } from '@/lib/time_util'

const InactiveMeeting = ({...props}: DisplayMeetingType) => <div><b>{props.startTime.toLocaleDateString()}</b> {props.startTime.toLocaleTimeString('he-IL')}-{props.endTime.toLocaleTimeString('he-IL')} ({timeDiffInMinutes(props.startTime,props.endTime)} דק'), {props.location}</div>
const ActiveMeeting =  ({...props}: DisplayMeetingType) => <div><b>פגישה פעילה</b> {props.startTime.toLocaleTimeString('he-IL')}-{new Date().toLocaleTimeString('he-IL')} ({timeDiffInMinutes(props.startTime,new Date())} דק'), {props.location}</div>
function MeetingInformationLine(props: {
    withSeparator: boolean
} & DisplayMeetingType) {
    
    return (
        <Fragment>
          <div className="text-sm">
            {props.active ? <ActiveMeeting {...props}/> : <InactiveMeeting {...props}/>}
          </div>
          {props.withSeparator && <Separator className="my-2" />}
        </Fragment>
      )
}

export default MeetingInformationLine

