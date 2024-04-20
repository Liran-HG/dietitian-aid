"use server"
import { db } from "@/lib/db"
import { getMeetingHistory, patientExists } from "@/lib/db/patients"
import { lg } from "@/lib/logger/log"
import { validateIsraeliID } from "@/lib/utils"
import { DisplayMeetingType, FullMeetingDetailType } from "@/models/Meetings/MeetingDetails"
import { CreatePatientSchemaForm } from "@/models/Patient/FormCreate"
import { Prisma, meetings } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { ZodError, z } from "zod"
import { zfd } from "zod-form-data"
import { createPatient as dbCreatePatient } from "@/lib/db/patients"
import { ZodActionResult, ActionResultStatus } from "@/lib/actionResult"
import { ErrorCode } from "@/models/Error"
export const createPatient = async (rawData: z.infer<typeof CreatePatientSchemaForm>) => {
    const returnObj: ZodActionResult<number> = {
        status: ActionResultStatus.ERROR,
        data: 0,
        errorCodes: []
    }
    
    lg("Attempting to create new patient: ", rawData)
    const safeParse = CreatePatientSchemaForm.safeParse(rawData)
    // validate patient information
    if (safeParse.success && safeParse.data) {
        const { first_name, last_name, gov_id, eng_name } = safeParse.data
        // patient exists
        if (await patientExists(gov_id)) {
            lg("Patient already exists", gov_id)
            returnObj.errorCodes.push(ErrorCode.CREATE_PATIENT_PATIENT_EXISTS)
            return returnObj
        } else {
            // valid patient information
            lg("Format correct: ", `first_name: ${first_name}, last_name: ${last_name}, gov_id: ${gov_id}, eng_name: ${eng_name}`)
            
            // clean up name
            rawData.eng_name = rawData.eng_name.trim().replaceAll(" ", "_")
            
            let patient: Prisma.patientsCreateInput
            patient = {
                first_name: first_name,
                last_name: last_name,
                gov_id: gov_id,
                eng_name: eng_name,
            }

            const recordId = await dbCreatePatient(patient)
            // success
            if (recordId) {
                returnObj.status = ActionResultStatus.SUCCESS
                returnObj.data = recordId
            }
            else {
                returnObj.errorCodes.push(ErrorCode.GENERAL_DB_ERROR)
            }
        }
    } else if (!safeParse.success) {
        // example found error:  { formErrors: [], fieldErrors: { id: [ 'מספר ת.ז. לא תקין.' ] } }
        lg("found create patient error: ", safeParse.error.flatten() ?? "unknown error")
        safeParse.error.errors.forEach((err) => {
            lg(err)
        })
        returnObj.errorCodes.push(ErrorCode.CREATE_PATIENT_INVALID_INPUT)
        returnObj.errors = safeParse.error.issues
    } else {
        lg("Unknown create patient error", safeParse)
        returnObj.errorCodes.push(ErrorCode.UNKNOWN_ERROR)
    }

    return returnObj
}
export const getPatientMeetings = async (patientId: number): Promise<FullMeetingDetailType[]> => {
    let res = await getMeetingHistory(patientId)
    // get extension to add location display name
    let returnRes = Prisma.getExtensionContext(res)
    let meetingsRes: FullMeetingDetailType[] = returnRes.map((meeting: any) => {
        return {
            id: meeting.id,
            startTime: meeting.start_time,
            endTime: meeting.end_time,
            active: meeting.active,
            location: meeting.locationDisplayName ?? "לא ידוע",
        }
    })
    return meetingsRes
}
export const refetchPatient = async (patientId: number) => {
    revalidatePath(`/patient/${patientId}`, "layout")
}
