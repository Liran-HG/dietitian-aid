"use client";
import { getPatientMeetings } from '@/actions/Patient';
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useEffect } from 'react'
import { Skeleton } from '../ui/skeleton';
import { useRepeatElement } from '@/hooks/useRepeatElement';
import { DisplayMeetingType, FullMeetingDetailType } from '@/models/Meetings/MeetingDetails';
import MeetingInformationLine from './MeetingInformationLine';

type Props = {
  userId: number;
};
function MeetingsSkeleton() {
  const { repeat } = useRepeatElement();
  return (
    <div className="space-y-2">
      {repeat(<Skeleton className="h-4 w-full" />, 5)}
    </div>
  )
}
function MeetingHistory(props: Props) {
  const [meetings, setMeetings] = React.useState<DisplayMeetingType[]>([]);

  useEffect(() => {
    getPatientMeetings(props.userId).then((res: FullMeetingDetailType[]) => {
      if (res) {
        let resp = res.map((meeting: FullMeetingDetailType) => new Object({
          location: meeting.location,
          id: meeting.id,
          active: meeting.active,
          startTime: meeting.startTime,
          endTime: meeting.endTime
        }) as DisplayMeetingType)
        setMeetings(resp)

      }
    })
  }, [])
  return (
    <ScrollArea className='max-h-48 w-full rounded-md border overflow-auto'>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">היסטוריית פגישות:</h4>
        {meetings.length == 0 && <MeetingsSkeleton />}
        {meetings.map((meeting: any) => (
          <MeetingInformationLine key={meeting.id} {...meeting} />
        ))}
      </div>
    </ScrollArea>
  )
}

export default MeetingHistory