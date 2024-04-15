import { createBrowserClient } from '@supabase/ssr';
import { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from '@/lib/db/database.tyles';
 
let client: SupabaseClient<Database> | undefined;
 
export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }
 
 
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
 
  client = createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
  );
 
  return client;
}