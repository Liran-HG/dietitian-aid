import React from 'react'
import { ButtonIcon } from '../Buttons/ButtonIcon'
import { PencilIcon } from '../Icons/PencilIcon'

function ButtonManualInsert() {
  return (
    <ButtonIcon icon={<PencilIcon />} text={'הזנת שקילה ידנית'}/>
  )
}

export default ButtonManualInsert