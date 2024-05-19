"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React, { createContext, useRef } from 'react'
import { CreatePatientSchemaForm as formSchema } from '@/models/Patient/FormCreate';
import { useForm } from 'react-hook-form'
import { child } from 'winston';
import { z } from 'zod';
import { UserEditModeStore, useUserEditModeStore } from './UserEditModeStore';

export const UserEditModeStoreContext = createContext<UserEditModeStore | null>(null)
export default function PatientEditorContext({ patient, children }: { patient: any, children: React.ReactNode }) {
    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onTouched" || "onSubmit",
        resolver: zodResolver(formSchema),
    })


    const store = useRef(useUserEditModeStore({
        edit: false,
        patient: patient,
        form: form,
    })).current
    
    
  return (
    <UserEditModeStoreContext.Provider value={store}>{children}</UserEditModeStoreContext.Provider>
  )
}
