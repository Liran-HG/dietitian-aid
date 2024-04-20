"use client"
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export function useNavigateToPatientPage(patientId: number) {
    const router = useRouter()

    const goFunc = useCallback((overrideId: number = patientId) => {
        router.push('/patient/' + overrideId)
    }, [patientId])

    return {go: goFunc}
}