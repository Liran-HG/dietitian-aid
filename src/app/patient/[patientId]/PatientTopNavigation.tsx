import BackButton from '@/components/Buttons/BackButton'
import { ButtonIcon } from '@/components/Buttons/ButtonIcon'
import ButtonMeeting from '@/components/Buttons/ButtonMeeting'
import EditPatientButton from '@/components/Buttons/EditPatientButton'
import { LoadToScaleIcon } from '@/components/Icons/LoadToScaleIcon'
import React from 'react'

export default function PatientTopNavigation({ patientId }: { patientId: number }) {

  return (
    <div className="flex gap-2 justify-between items-center">
      <BackButton />
      <div className="flex flex-row gap-3 items-center">
        <ButtonMeeting userId={patientId} />
      </div>
      <div className='flex gap-2'>
        <EditPatientButton />
        <ButtonIcon
          icon={<LoadToScaleIcon />}
          text="טען פציינט למשקל"
          className="text-primary bg-green-100 shadow-md"
        ></ButtonIcon>
      </div>
    </div>
  )
}
