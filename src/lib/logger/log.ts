"use server";
import { getLogger } from "@/lib/logger/winston";
import util from "util";

export async function lg(...args: any[]) {
    console.log(...args);
    (await getLogger()).info(util.format(...args))
}
