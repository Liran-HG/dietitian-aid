"use client";
import { lg } from '@/lib/logger/log'
import React from 'react'
import { ButtonIcon } from './ButtonIcon';
import { PencilIcon } from '../Icons/PencilIcon';
import { useRouter } from 'next/navigation'

function ButtonNavigateToPatientPage({ patient }: { patient: number }) {
    const router = useRouter()
    return (
        <ButtonIcon
            icon={<PencilIcon />}
            text="כרטיס מטופל"
            className="shadow-sm"
            onClick={() => router.push('/patient/' + patient)}
        ></ButtonIcon>
    )
}

export default ButtonNavigateToPatientPage