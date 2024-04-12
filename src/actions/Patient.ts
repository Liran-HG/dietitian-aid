"use server";
import { lg } from '@/lib/logger/log';
import { validateIsraeliID} from '@/lib/utils'
import { CreatePatientSchemaForm } from '@/models/Patient/FormCreate';
import {z} from 'zod'
import { zfd } from "zod-form-data";
// const CreatePatientSchema = zfd.formData({
//     first_name: zfd.text(z.string().min(2).max(250)),
//     last_name: zfd.text(z.string().min(2).max(250)),
//     eng_name: zfd.text(z.string().min(2).max(250)),
//     id: zfd.text(z.string().min(2).max(9).refine((val :string) => validateIsraeliID(val)))
    
// })

export const createPatient = (rawData: z.infer<typeof CreatePatientSchemaForm>) => {
    lg("rawData: ", rawData)
    rawData.id = "200699263"
    // const res  = CreatePatientSchemaForm.safeParse(rawData);
    // lg("res",res)
    const safeParse = CreatePatientSchemaForm.safeParse(rawData);
    if(safeParse.success && safeParse.data){
        const {first_name,last_name,id,eng_name} = safeParse.data
        lg("first_name",first_name)
        lg("last_name",last_name)
        lg("id",id)
        lg("eng_name",eng_name)
    }
    else if(!safeParse.success) {
        // example found error:  { formErrors: [], fieldErrors: { id: [ 'מספר ת.ז. לא תקין.' ] } }
        lg("found create patient error: ", safeParse.error.flatten() ?? "unknown error")
    }
    else {
        lg("Unknown create patient error", safeParse)
    }
    

    return true;
}