"use client";
import { DataField } from '@/components/Display/DataField';
import { dateToAge } from '@/lib/utils';
import { lg } from '@/lib/logger/log';
import { Form } from '@/components/ui/form';

import { CreatePatientSchemaForm as formSchema } from '@/models/Patient/FormCreate';
import { z } from 'zod';
import { usePatientEditModeFromContext } from '@/hooks/usePatientEditModeFromContext';
import SelectField from '@/components/Display/SelectField';
// const PatientPageFormContext = createContext({} as any);

export const PatientPageFormIdentity = ({ children }: { children?: React.ReactNode }) => {
    const { edit, form, patient } = usePatientEditModeFromContext()
    return <>
        <section>
            <div className="flex gap-4 items-center">
                <DataField name="first_name" label={'שם'} value={patient.first_name} liveUpdate={edit} formControl={form.control} />
                <DataField name="last_name" label='משפחה' value={patient.last_name} liveUpdate={edit} formControl={form.control} />
            </div>
            <DataField name="end_name" label='מזהה לועזי' value={patient.eng_name} liveUpdate={edit} formControl={form.control} />
            <div className="flex gap-4 items-center">
                <DataField name="date_of_birth" label='גיל' value={patient.date_of_birth ? dateToAge(patient.date_of_birth) : ""} liveUpdate={edit} formControl={form.control} />
                <DataField name="gender" label='מגדר' value={patient.gender} liveUpdate={edit} formControl={form.control} />
            </div>
        </section>
        <section>
            <DataField name='gov_id' label="ת.ז." value={patient.gov_id} liveUpdate={false} formControl={form.control} />
            <SelectField name="type" label="סוג לקוח" value={patient.type ? patient.type.toString() : ""} liveUpdate={edit} formControl={form.control} values={[
                ["1","1"],
                ["2","2"],
                ["3","3"],
                ["4","4"],
                ["5","5"],
            ]} />
        </section>
        {children}
    </>
};
export const PatientPageFormAddress = ({ children }: { children?: React.ReactNode, }) => {
    const { edit, form, patient } = usePatientEditModeFromContext()
    return <>
        <section>
            <div className="flex gap-1 flex-col items-center">
                <DataField name="phone" label="טלפון" value={patient.patient_addresses?.phone ?? ""} liveUpdate={edit} formControl={form.control} />
                <DataField name="email" label="אימייל" value={patient.patient_addresses?.email ?? ""} liveUpdate={edit} formControl={form.control} />
            </div>
            <DataField
                name='address'
                label="כתובת"
                multiline={true}
                value={patient.patient_addresses?.address ?? ""} liveUpdate={edit} formControl={form.control}
            />
        </section>
        {children}
    </>
};
export const PatientPageFormActivity = ({ children }: { children?: React.ReactNode }) => {
    const { edit, form, patient } = usePatientEditModeFromContext()
    return <>
        <section>
            <SelectField name="activity_level" label="רמת פעילות" value="2" liveUpdate={edit} formControl={form.control} values={[
                ["1","1 - לא פעיל.ה / בישיבה"],
                ["2","2 - פעילות מתונה / מזדמנת"],
                ["3","3 - פעיל.ה"],
                ["4","4 - אתלט.ית"],
            ]} />
            <DataField name="weight" label="משקל התחלתי (בק״ג)" value="93" liveUpdate={edit} formControl={form.control} />
            <DataField name="height" label="גובה (בסמ')" value="182" liveUpdate={edit} formControl={form.control} />
        </section>
        {children}
    </>
};
export default function PatientPageForm({ patient, children }: { patient: any, children: React.ReactNode }) {   
    const { form } = usePatientEditModeFromContext()
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        lg("submit attempt", values);
    }
    const FormWrapper = ({ children }: { children: React.ReactNode }) => (        
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {children}
            </form>
        </Form>
    )
    return (
        <FormWrapper>
            {children}
        </FormWrapper>
    )

}