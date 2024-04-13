import { db } from "@/lib/db/index";
import { lg } from "@/lib/logger/log";
import { Prisma, patients } from "@prisma/client";

export async function getPatients(limit: number = -1) {
  return await db.patients.findMany(limit > 0 ? { take: limit } : undefined);
}
export async function getPatient(id: number, fullDetails: boolean = false) {
  let res = await db.patients.findFirst({
    where: { id: id },
    include: {
      patient_addresses:fullDetails ? true : false,
      patient_physique: fullDetails ? true : false
    }
  });

  if (res == null) {
    lg("patient not found", id);
    return null;
  }
  return res;
}


export async function getMeetingHistory(patientId: number) {
  let res = await db.meetings.findMany({
    where: { patient_id: patientId }
  });

  if (res == null) {
    lg("patient meetings not found", patientId);
    return null;
  }
  return res;
}
export async function searchPatient(searchParams: Prisma.patientsWhereInput) {
  let res = await db.patients.findMany({
    where: searchParams,
    include: {
      patient_addresses: true,
    },
  });

  if (res == null || res.length == 0) {
    lg("patient not found");
    return null;
  }
  return res;
}
export async function deletePatient(id: number) {
  let res = await db.patients.delete({ where: { id: id } });

  if (res == null) {
    lg("patient not found", id);
    return null;
  }
  return res;
}
