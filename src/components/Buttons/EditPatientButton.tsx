"use client"
import React, { useContext } from 'react'
import { ButtonIcon } from './ButtonIcon'
import { PencilIcon } from '../Icons/PencilIcon'
import { usePatientEditModeFromContext } from '@/hooks/usePatientEditModeFromContext'

export default function EditPatientButton() {
    const { edit, setEditMode } = usePatientEditModeFromContext()
    const toggleEditMode = () => {
        console.log("Toggle Patient Edit", setEditMode,edit)
        if(setEditMode) setEditMode(!edit)
    }

    const saveChanges = () => {
        console.log("Save Changes Patient Edit", setEditMode,edit)
        if(setEditMode) setEditMode(!edit)
    }

    return (
        <>
        <ButtonIcon
            icon={<PencilIcon />}
            text="בטל עריכה"
            className={`text-primary shadow-md ${!edit ? "hidden" : ""}`}
            onClick={toggleEditMode}
        ></ButtonIcon>
            <ButtonIcon
                icon={<PencilIcon />}
                text={!edit ?"ערוך פציינט" : "שמור שינויים"}
                className="text-primary shadow-md"
                onClick={saveChanges}
            ></ButtonIcon>
        </>
    )
}
