"use client";
import React from "react";
import { createPatient } from "@/actions/Patient";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { validateIsraeliID } from "@/lib/utils";
import { CreatePatientSchemaForm as formSchema } from '@/models/Patient/FormCreate';
import { lg } from "@/lib/logger/log";
function CreatePatientForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onTouched" || "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      eng_name: "",
      
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    lg("submit attempt",values);
    createPatient(values)
  }
  return (
    <Form {...form}>
       {/* action={createPatient} */}
      <form onSubmit={form.handleSubmit(onSubmit)}> 
        <h1 className="py-2">צור לקוח</h1>
        <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="id"
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
        <Button type="submit">הוסף</Button>
        </div>
      </form>
    </Form>
  );
}

export default CreatePatientForm;
