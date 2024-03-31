import React from 'react'
import { ButtonIcon } from '../Buttons/ButtonIcon'
import DownloadIcon from '../Icons/DownloadIcon'

function ButtonPrintPDF() {
  return (
    <ButtonIcon icon={<DownloadIcon />} text={'הדפס PDF'} className='text-primary bg-green-100 shadow-lg'/>
  )
}

export default ButtonPrintPDF