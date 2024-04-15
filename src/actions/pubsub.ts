"use server";
import { lg } from '@/lib/logger/log'
import { RealtimeChannel, createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabase = createClient(supabaseUrl,supabaseAnonKey)

class Channel {
    private id:string;
    private subscribers = new Set<string>();
    private _supabaseChannel: RealtimeChannel | null= null;
    constructor(channelId: string){
        this.id = channelId
    }

    private broadcast(payload: any) {

    }
    public subscribe(identity: string){
        // if first subscriber, register the channel
        if(this.subscribers.size == 0){
        
        }
        this.subscribers.add(identity)
    }
    public unsubscribe(identity: string){
        this.subscribers.delete(identity)
        // if everyone left, shut down the channel
        if(this.subscribers.size == 0){
        
        }
    }

    private subscribeToChannel = () => {
        supabase
        .channel(this.id)
        .on('broadcast', { event: 'message' }, payload => {
          this.broadcast(payload)
        })
    }
}
const ChannelMaps = () => {
    const channels:Channel[] =[];
    

    const getChannels = ():Channel[] => {
        return channels
    }


    const createChannel = (channelId: string) => {
        const channel = new Channel(channelId)
        
    }
        

}
export const subscribe = async (channelId: string, identity: string, callback: Function) => {
    // subscribeToChannel(channelId, (payload) => {
    //     console.log("payload from ACTIONS", payload)
    // })


    supabase
    .channel(channelId)
    .on('broadcast', { event: 'message' }, payload => {
      console.log('Cursor position received!', payload)
    })
    .subscribe((status) => {
        lg("Supabase channel subscription: ", status)
    }).on('broadcast', { event: 'message' }, payload => {
         lg("Supabase channel message: ", payload);         
         callback(channelId,payload)
    })
    supabase.channel(channelId).send({ type: 'broadcast', event: 'message', payload: { hello: 'world' } })
}
const callback = (channelId: string, payload: any) => {
    console.log("payload from ACTIONS ", payload)
    console.log("CH: ", channelId)
}
export const unsubscribe = async (channelId: string, identity: string) => {
    // unsubscribeFromChannel(channelId)
    
    supabase.channel(channelId).unsubscribe()
}