import { validateIsraeliID } from "@/lib/utils";
import { z } from "zod";

export const CreatePatientSchemaForm = z.object({
  first_name: z.string().min(2, {
    message: "שם חייב להכיל לפחות 2 תווים.",
  }),
  last_name: z.string().min(2, {
    message: "שם משפחה חייב להכיל לפחות 2 תווים.",
  }),
  id: z.string({required_error: "יש להזין מספר ת.ז."}).refine((val :string) => validateIsraeliID(val), {
    message: "מספר ת.ז. לא תקין.",
  }),
  eng_name: z.string().min(2, {
    message: "מזהה לועזי חייב להכיל לפחות 2 תווים",
  }),
});
