import { useMemo } from "react";
import { getSupabaseBrowserClient } from "@/lib/createSupabaseBrowserClient"

function useSupabase(){
    return useMemo(getSupabaseBrowserClient, [])
}

export default useSupabase