
import { getPatient, searchPatient } from "@/lib/db/patients";
import PatientPage from "./PatientPage";

export default async function Patient({ params }: { params: { patientId: string } }) {
  const patient = await getPatient(parseInt(params.patientId), true);
  
  if (!patient) {
    return <main className="flex min-h-screen flex-col p-6 md:p-24"><h2>מטופל לא נמצא</h2></main>
  }
  return (
    <>
      <PatientPage patient={patient} />
    </>
  );
}
