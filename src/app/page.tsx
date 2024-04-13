
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CreatePatientForm from "@/components/Patient/CreatePatientForm";
import { getPatients } from "@/lib/db/patients";
import { DrawerModel } from "@/components/Drawer/DrawerModel";
import TableHead from "@/components/RTLTable/TableHead";
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@/components/Buttons/ButtonIcon";
import { BackIcon } from "@/components/Icons/BackIcon";
import { PencilIcon } from "@/components/Icons/PencilIcon";
import ButtonNavigateToPatientPage from "@/components/Buttons/ButtonNavigateToPatientPage";

export default async function Home() {
  const patients = await getPatients();
  return (
    <main className="p-24 flex flex-col ">
      <div className="text-center">
        <DrawerModel title={"הוספת מטופל"} description={"הוסף מטופל חדש למערכת"} showCloseBtn={true} buttonText={"הוספת מטופל"} >
          <CreatePatientForm />
        </DrawerModel>
      </div>
      <h2>רשימת מטופלים</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ת.ז.</TableHead>
            <TableHead>שם מלא</TableHead>
            <TableHead>מזהה לועזי</TableHead>
            <TableHead>ניהול</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.gov_id}</TableCell>
              <TableCell>
                {patient.first_name} {patient.last_name}
              </TableCell>
              <TableCell>{patient.eng_name}</TableCell>
              <TableCell>
                  <ButtonNavigateToPatientPage patient={patient.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
