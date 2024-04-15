"use client";
import { pusherClient } from "@/lib/pubsub/pusher";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react"

export function usePusherRealtime<T>(queryKey:any[],queryFun:() => Promise<T[]|T>): {
    data:T|T[]|undefined,
    invalidate:() => void, 
    isLoading:boolean,
    isFetching:boolean} {
    let seed: string = String(Math.random())

    const { data, isLoading, refetch, isFetching } = useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            return await queryFun()
        },
    })

    useEffect(() => {
        pusherClient.subscribe(queryKey.join("-"))
        pusherClient.bind(`refetch`, () => {
            refetch()
        })
        return () => {
            pusherClient.unsubscribe(queryKey.join("-"))
        }
    })

    const invalidate = async () => {
        console.log("Invalidated ", queryKey)
        refetch()
    }

    return { data, isLoading, invalidate, isFetching }


}
