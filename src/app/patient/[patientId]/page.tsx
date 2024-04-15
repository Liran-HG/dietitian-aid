import BackButton from "@/components/Buttons/BackButton";
import { ButtonIcon } from "@/components/Buttons/ButtonIcon";
import ButtonMeeting from "@/components/Buttons/ButtonMeeting";
import { DataField } from "@/components/Display/DataField";
import { BackIcon } from "@/components/Icons/BackIcon";
import { LoadToScaleIcon } from "@/components/Icons/LoadToScaleIcon";
import MeetingHistory from "@/components/Meetings/MeetingHistory";
import TodayContainer from "@/components/SummaryContainers/TodayContainer";
import ButtonLoadFromScale from "@/components/Weighing/ButtonLoadFromScale";
import ButtonManualInsert from "@/components/Weighing/ButtonManualInsert";
import ButtonPrintPDF from "@/components/Weighing/ButtonPrintPDF";
import { WeighingHistoryTable } from "@/components/Weighing/HistoryTable";
import { getPatient, searchPatient } from "@/lib/db/patients";
import { lg } from "@/lib/logger/log";
import { dateToAge } from "@/lib/utils";
import Image from "next/image";

export default async function Patient({ params }: { params: { patientId: string } }) {
  const patient = await getPatient(parseInt(params.patientId),true);
  lg("patient", patient);
  if(!patient){
    return <main className="flex min-h-screen flex-col p-6 md:p-24"><h2>מטופל לא נמצא</h2></main>
  }
  return (
      <main className="flex min-h-screen flex-col p-6 md:p-24">
        <Image
          src={"/logo.png"}
          alt={"Logo"}
          width={300}
          height={100}
          className="mx-auto mb-10"
        />
        <div className="flex gap-2 justify-between items-center">
          <BackButton/>
          {/* <h1 className="font-header">ישראל ישראלי</h1> */}
          <div className="flex flex-row gap-3 items-center">
            {/* <ButtonIcon icon={<StartMeetingIcon />} text="התחל פגישה" /> */}
            <ButtonMeeting userId={patient.id} />
          </div>
          <ButtonIcon
            icon={<LoadToScaleIcon />}
            text="טען פציינט למשקל"
            className="text-primary bg-green-100 shadow-md"
          ></ButtonIcon>
        </div>
        <h2 className="font-display mt-8">פרטי מטופל:</h2>
        <div className="flex justify-between flex-col md:flex-row">
          <section>
            <div className="flex gap-4">
              <DataField name="שם" value={patient.first_name} />
              <DataField name="משפחה" value={patient.last_name} />
            </div>
            <DataField name="מזהה לועזי" value={patient.eng_name}/>
            <div className="flex gap-4">
              <DataField name="גיל" value={patient.date_of_birth ? dateToAge(patient.date_of_birth) : ""} />
              <DataField name="מין" value={patient.gender} />
            </div>

            {/* <div className="w-[300px] h-[200px] bg-red-400"></div> */}
          </section>
          <section>
            <DataField name="ת.ז." value={patient.gov_id} />
            <DataField name="סוג לקוח" value={patient.type? patient.type.toString() : "חסר"} />

            {/* <div className="w-[300px] h-[200px] bg-green-400"></div> */}
          </section>
          <section>
            <div className="flex gap-4 flex-col md:flex-row">
              <DataField name="טלפון" value={patient.patient_addresses?.phone ?? ""} />
              <DataField name="אימייל" value={patient.patient_addresses?.email ?? ""} />
            </div>
            <DataField
              name="כתובת"
              multiline={true}
              value={patient.patient_addresses?.address ?? ""}
            />
            {/* <div className="w-[300px] h-[200px] bg-blue-400"></div> */}
          </section>
        </div>

        <div className="flex justify-between flex-col md:flex-row ">
          <section>
            <DataField name="רמת פעילות" value="2 - נמוכה מאוד" />
            <DataField name="משקל התחלתי" value="93 קג" />
            <DataField name="גובה" value="182 סמ" />
            {/* <div className="w-[300px] h-[200px] bg-blue-400"></div> */}
          </section>
          <section className="w-full md:w-1/3 p-4 justify-self-center md:justify-self-start">
            <MeetingHistory patientId={patient.id}></MeetingHistory>
          </section>
        </div>
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
  );
}
