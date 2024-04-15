"use server";

import { usePusherRefetchTrigger } from "@/hooks/server/usePusherTrigger";

export const createMeeting = async (patientId:number) => {    
    const { refetch } = usePusherRefetchTrigger(`patientMeetings-${patientId}`)
    refetch()
}