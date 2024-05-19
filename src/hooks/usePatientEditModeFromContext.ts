"use client"
import { UserEditModeStoreContext } from "@/stores/PatientEditor/PatientEditorContext"
import { useContext } from "react"
import { useStore } from "zustand"

export function usePatientEditModeFromContext() {
    const contextStore = useContext(UserEditModeStoreContext)
    if (!contextStore) throw new Error("Error loading patient edit mode store")
    return useStore(contextStore)
}
