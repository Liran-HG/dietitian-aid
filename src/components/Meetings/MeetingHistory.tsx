"use client";
import { getPatientMeetings } from '@/actions/Patient';
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useEffect } from 'react'
import { Skeleton } from '../ui/skeleton';
import { useRepeatElement } from '@/hooks/useRepeatElement';
import { DisplayMeetingType, FullMeetingDetailType } from '@/models/Meetings/MeetingDetails';
import MeetingInformationLine from './MeetingInformationLine';
import { useMeetingsInformation } from '@/hooks/useMeetingsInformation';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { usePusherRealtime } from '@/hooks/usePusherRealtime';

type Props = {
  patientId: number;
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
  //const { meetings, isLoading, isFetching, isRefetching } = useMeetingsInformation(props.patientId);
  const { data, isLoading, isFetching } = usePusherRealtime<DisplayMeetingType>(["patientMeetings", props.patientId], async () => {
    const res = await getPatientMeetings(props.patientId)
    let resp = res.map(
      (meeting: FullMeetingDetailType) =>
        new Object({
          location: meeting.location,
          id: meeting.id,
          active: meeting.active,
          startTime: meeting.startTime,
          endTime: meeting.endTime,
        }) as DisplayMeetingType
    )
    return resp as DisplayMeetingType[]
  })
  return (
    <ScrollArea className='max-h-48 w-full rounded-md border overflow-auto'>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">היסטוריית פגישות:</h4>
        {(isLoading || data == undefined) && <MeetingsSkeleton />}
        {(isFetching) && <SpinnerIcon />}
        {data && (data as DisplayMeetingType[]).map((meeting: any) => (
          <MeetingInformationLine key={meeting.id} {...meeting} />
        ))}
      </div>
    </ScrollArea>
  )
}

export default MeetingHistory