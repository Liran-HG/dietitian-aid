"use server";
import { getLogger } from "@/lib/logger/winston";
import util from "util";

export const log = async (...args: any[]) => {
    (await getLogger()).info(util.format(...args))
}