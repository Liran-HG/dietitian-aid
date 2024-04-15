"use client"
import { getPatientMeetings } from "@/actions/Patient"
import { subscribe, unsubscribe } from "@/actions/pubsub"
import { lg } from "@/lib/logger/log"
import { sleep } from "@/lib/utils"
import { DisplayMeetingType, FullMeetingDetailType } from "@/models/Meetings/MeetingDetails"
import { RefetchOptions, useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { Redis } from "@upstash/redis"
import { Redis as Redisio } from "ioredis"
import { pusherClient } from "@/lib/pubsub/pusher"

export function useMeetingsInformation(patientId: number) {
    let seed: string = String(Math.random())
    const KEY = "patientMeetings"
    const QUERY_KEY = [KEY, patientId]

    const queryClient = useQueryClient()
    const { data, isLoading, refetch, isRefetching, isFetching } = useQuery({
        queryKey: QUERY_KEY,
        queryFn: async () => {
            const res = await getPatientMeetings(patientId)
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
        },
    })

    useEffect(() => {
        pusherClient.subscribe(`patientMeetings-${patientId}`)
        pusherClient.bind(`refetch`, () => {
            refetch()
        })
        return () => {
            pusherClient.unsubscribe("patientMeetings-" + patientId)
        }
    })

    const updateMeetings = async () => {
        // const member = await redis.srandmember<string>("nextjs14")

        // redis.su
        // debugger;
        console.log("Invalidate meetings", patientId)
        // refetch()
    }

    return { meetings: data, isLoading, updateMeetings, isRefetching, isFetching }
}
