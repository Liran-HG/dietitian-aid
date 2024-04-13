

import { DisplayMeetingType } from '@/models/Meetings/MeetingDetails'
import React, { Fragment } from 'react'
import { Separator } from '../ui/separator'
import { timeDiffInMinutes } from '@/lib/time_util'

function MeetingInformationLine(props: {
    withSeparator: boolean
} & DisplayMeetingType) {
    
    return (
        <Fragment>
          <div className="text-sm">
            <b>{props.startTime.toLocaleDateString()}</b> {props.startTime.toLocaleTimeString('he-IL')}-{props.endTime.toLocaleTimeString('he-IL')} ({timeDiffInMinutes(props.startTime,props.endTime)} דק'), {props.location}
          </div>
          <Separator className="my-2" />
        </Fragment>
      )
}

export default MeetingInformationLine

