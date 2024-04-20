"use client";
import React from "react";
import { createPatient } from "@/actions/Patient";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { number, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreatePatientSchemaForm as formSchema } from '@/models/Patient/FormCreate';
import { lg } from "@/lib/logger/log";
import { ActionResultStatus, ZodActionResult } from "@/lib/actionResult";
import { useNavigateToPatientPage } from "@/hooks/useNavigateToPatientPage";
import { ErrorCode } from "@/models/Error";
function CreatePatientForm() {
  const [errors, setErrors] = React.useState<string[]>([]);
  const navigate = useNavigateToPatientPage(0)
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onTouched" || "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      eng_name: "",

    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    lg("submit attempt", values);
    createPatient(values).then((res: ZodActionResult<number>) => {
      lg("create patient response", res);
      if (res.status == ActionResultStatus.SUCCESS) {
        navigate.go(res.data)
      }
      else {
        const addErrors = res.errorCodes.map(e => {
          switch (e) {
            case ErrorCode.CREATE_PATIENT_PATIENT_EXISTS:
              return "מספר ת.ז. כבר קיים"
            case ErrorCode.GENERAL_DB_ERROR:
              return "לא ניתן להזין מטופל"
            default:
              return "לא ניתן להוסיף מטופל"
          }
        })
        setErrors(res.errors?.map(e => e.message) ?? [])
        if (addErrors.length > 0) setErrors([...errors, ...addErrors])
      }
    })

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="gov_id"
            render={({ field }) => (
              <FormItem >
                <FormLabel>ת.ז.</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>שם פרטי</FormLabel>
                <FormControl>
                  <Input placeholder="ישראל" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>שם משפחה</FormLabel>
                <FormControl>
                  <Input placeholder="ישראלי" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eng_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>מזהה לועזי</FormLabel>
                <FormControl>
                  <Input placeholder="israel" {...field} />
                </FormControl>
                <FormDescription>שם שיופיע ע"ג מערכות ללא עברית.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {errors.length > 0 && <div className="text-red-500">
            תקלה בהוספת מטופל:
            <ul>{errors.map(e => <li>{e}</li>)}</ul>
          </div>}
          <Button type="submit">הוסף</Button>
        </div>
      </form>
    </Form>
  );
}

export default CreatePatientForm;
