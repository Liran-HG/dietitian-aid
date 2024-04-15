// Supabase pubsub


import { createClient } from '@supabase/supabase-js'
import { lg } from '../logger/log'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
console.log("SUPABASE URL: ",supabaseUrl ?? "")
const supabase = createClient(supabaseUrl,supabaseAnonKey)


export function subscribeToChannel(channelId: string,callback?: (payload: any) => void) {
    supabase
    .channel(channelId)
    .on('broadcast', { event: 'message' }, payload => {
      console.log('Cursor position received!', payload)
    })
    .subscribe((status) => {
        lg("Supabase channel subscription: ", status)
    }).on('broadcast', { event: 'message' }, payload => {
         lg("Supabase channel message: ", payload);         
         if(callback) callback(payload)
    })
    supabase.channel(channelId).send({ type: 'broadcast', event: 'message', payload: { hello: 'world' } })
}

export function unsubscribeFromChannel(channelId: string) {
    supabase.channel(channelId).unsubscribe()
}
