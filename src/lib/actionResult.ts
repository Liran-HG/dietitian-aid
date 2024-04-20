import { ZodError, ZodIssue } from "zod"

export enum ActionResultStatus {
    SUCCESS = 200,
    ERROR = 500
}

export type BasicActionResult<T> = {
    status: number,
    data: T,
    errorCodes: number[],
}
export type ZodActionResult<T> = BasicActionResult<T> & {
    errors?: ZodIssue[]
}