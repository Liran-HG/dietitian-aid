import { validateEnglishInput, validateIsraeliID } from "@/lib/utils"
import { z } from "zod"
import { gender } from "@prisma/client"
const CreatePatientSchemaFormObj = {
    first_name: z.string().min(2, {
        message: "שם חייב להכיל לפחות 2 תווים.",
    }),
    last_name: z.string().min(2, {
        message: "שם משפחה חייב להכיל לפחות 2 תווים.",
    }),
    gov_id: z.string({ required_error: "יש להזין מספר ת.ז." }).refine((val: string) => validateIsraeliID(val), {
        message: "מספר ת.ז. לא תקין.",
    }),
    eng_name: z
        .string()
        .min(2, {
            message: "מזהה לועזי חייב להכיל לפחות 2 תווים",
        })
        .refine((val: string) => validateEnglishInput(val), {
            message: "מזהה לועזי יכול להכיל אותיות באנגלית, מספרים, ומקפים בלבד.",
        }),
}
export const CreatePatientSchemaForm = z.object(CreatePatientSchemaFormObj)
//const genders= Object.values(gender)
export const CreatePatientSchemaFormFull = z.object(
    {
        ...CreatePatientSchemaFormObj, 
        gender: z.nativeEnum(gender, { required_error: "יש לבחור מגדר" }),
        type: z.enum(["1", "2","3", "4","5", "6"], { required_error: "יש לבחור סוג לקוח" }).default("1"),
        phone: z.string(),
        address: z.string(),
        email: z.string().email({ message: "כתובת אימייל לא תקינה" }),

        activity_level: z.number(),
        height: z.number(),
        weight: z.number(),
        
        
        // date_of_birth: z.date().or(z.string().refine((val: string) => validateIsraeliID(val), {
            
        // }))
    }

)

