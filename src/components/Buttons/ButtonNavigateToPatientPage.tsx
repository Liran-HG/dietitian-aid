"use client";
import { lg } from '@/lib/logger/log'
import React from 'react'
import { ButtonIcon } from './ButtonIcon';
import { PencilIcon } from '../Icons/PencilIcon';
import { useNavigateToPatientPage } from '@/hooks/useNavigateToPatientPage';

function ButtonNavigateToPatientPage({ patient }: { patient: number }) {
    const nav = useNavigateToPatientPage(patient)
    return (
        <ButtonIcon
            icon={<PencilIcon />}
            text="כרטיס מטופל"
            className="shadow-sm"
            onClick={() => nav.go()}
        ></ButtonIcon>
    )
}

export default ButtonNavigateToPatientPage