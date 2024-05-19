
import BackButton from '@/components/Buttons/BackButton'
import ButtonMeeting from '@/components/Buttons/ButtonMeeting'
import { DataField } from '@/components/Display/DataField'
import { LoadToScaleIcon } from '@/components/Icons/LoadToScaleIcon'
import MeetingHistory from '@/components/Meetings/MeetingHistory'
import TodayContainer from '@/components/SummaryContainers/TodayContainer'
import ButtonLoadFromScale from '@/components/Weighing/ButtonLoadFromScale'
import ButtonManualInsert from '@/components/Weighing/ButtonManualInsert'
import ButtonPrintPDF from '@/components/Weighing/ButtonPrintPDF'
import { WeighingHistoryTable } from '@/components/Weighing/HistoryTable'
import { dateToAge } from '@/lib/utils'
import { patients } from '@prisma/client'
import { ButtonIcon } from "@/components/Buttons/ButtonIcon";
import React from 'react'
import TitleCard from '@/components/TitleCard'
import PatientTopNavigation from './PatientTopNavigation'
import PatientPageForm, { PatientPageFormActivity, PatientPageFormAddress, PatientPageFormIdentity } from './PatientPageForm'
import PatientEditorContext from '../../../stores/PatientEditor/PatientEditorContext'

export default function PatientPage({ patient }: { patient: any }) {
    return (
        <PatientEditorContext patient={patient}>
            <main className="flex min-h-screen flex-col p-6 md:p-24">
                <TitleCard />
                <PatientTopNavigation patientId={patient.id} />

                <h2 className="font-display mt-8">פרטי מטופל:</h2>
                <PatientPageForm patient={patient} >
                    <div className="flex justify-between flex-col md:flex-row">
                        <PatientPageFormIdentity />
                        <PatientPageFormAddress />
                    </div>
                    <div className="flex justify-between flex-col md:flex-row ">
                        <PatientPageFormActivity />
                        <section className="w-full md:w-1/3 p-4 justify-self-center md:justify-self-start">
                            <MeetingHistory patientId={patient.id}></MeetingHistory>
                        </section>
                    </div>
                </PatientPageForm>


                <section className="mt-8">
                    <div className="flex justify-between mb-4">
                        <h2 className="font-display">היסטוריית שקילות:</h2>
                        <ButtonPrintPDF />
                    </div>
                    <WeighingHistoryTable />

                    <div className="flex justify-between mt-4 flex-col md:flex-row gap-4">
                        <ButtonManualInsert />
                        <ButtonLoadFromScale />
                    </div>
                </section>
                <section className="mt-8">
                    <h2 className="font-display mb-4">הערות וסיכומי פגישות:</h2>
                    <div className="w-full flex gap-6">
                        <TodayContainer></TodayContainer>
                        <TodayContainer></TodayContainer>
                    </div>
                </section>
                <section className="flex flex-col justify-between items-center w-full pt-8">
                    <ButtonMeeting userId={patient.id} />
                </section>
            </main>
        </PatientEditorContext>
    )
}
