
import { lg } from "@/lib/logger/log";
import { pusherServer } from "@/lib/pubsub/pusher"

export function usePusherRefetchTrigger(channel: string) {
    lg("usePusherRefetchTrigger registered for channel: ",channel)
    
    return { refetch:() => pusherServer.trigger(channel, "refetch",null)}
}