import { ButtonIcon } from "@/app/components/Buttons/ButtonIcon";
import ButtonMeeting from "@/app/components/Buttons/ButtonMeeting";
import { DataField } from "@/app/components/Display/DataField";
import { BackIcon } from "@/app/components/Icons/BackIcon";
import { LoadToScaleIcon } from "@/app/components/Icons/LoadToScaleIcon";
import { StartMeetingIcon } from "@/app/components/Icons/StartMeetingIcon";
import MeetingHistory from "@/app/components/Meetings/MeetingHistory";
import TodayContainer from "@/app/components/SummaryContainers/TodayContainer";
import ButtonLoadFromScale from "@/app/components/Weighing/ButtonLoadFromScale";
import ButtonManualInsert from "@/app/components/Weighing/ButtonManualInsert";
import ButtonPrintPDF from "@/app/components/Weighing/ButtonPrintPDF";
import { WeighingHistoryTable } from "@/app/components/Weighing/HistoryTable";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Patient() {
  return (
    <>
      <div className="fixed top-0 text-center w-full p-0 m-0 border-b-1 border-gray-300 rounded-md  bg-green-100/70 shadow-sm">
        <p>פגישה נוכחית: 123:213</p>
      </div>
      <main className="flex min-h-screen flex-col p-6 md:p-24">
        <Image
          src={"/logo.png"}
          alt={"Logo"}
          width={300}
          height={100}
          className="mx-auto mb-10"
        />
        <div className="flex gap-2 justify-between items-center">
          <ButtonIcon
            icon={<BackIcon />}
            text="חזרה"
            className="shadow-md"
          ></ButtonIcon>
          {/* <h1 className="font-header">ישראל ישראלי</h1> */}
          <div className="flex flex-row gap-3 items-center">
            {/* <ButtonIcon icon={<StartMeetingIcon />} text="התחל פגישה" /> */}
            <ButtonMeeting userId="123" />
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
              <DataField name="שם" value="ישראל" />
              <DataField name="משפחה" value="ישראלי" />
            </div>
            <DataField name="מזהה לועזי" value="israel" />
            <div className="flex gap-4">
              <DataField name="גיל" value="36.8" />
              <DataField name="מין" value="זכר" />
            </div>

            {/* <div className="w-[300px] h-[200px] bg-red-400"></div> */}
          </section>
          <section>
            <DataField name="ת.ז." value="123456789" />
            <DataField name="סוג לקוח" value="1" />

            {/* <div className="w-[300px] h-[200px] bg-green-400"></div> */}
          </section>
          <section>
            <div className="flex gap-4 flex-col md:flex-row">
              <DataField name="טלפון" value="052-3123456" />
              <DataField name="אימייל" value="israel.israeli@gmail.com" />
            </div>
            <DataField
              name="כתובת"
              multiline={true}
              value="משכן הכנסת\n
             אליעזר קפלן 1\n
             ירושלים, 9195000 "
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
            <MeetingHistory userId={"123"}></MeetingHistory>
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
          <ButtonMeeting userId="123" />
        </section>
      </main>
    </>
  );
}
