"use client";
import React from 'react'
import { ButtonIcon } from './ButtonIcon';
import { BackIcon } from '../Icons/BackIcon';

function BackButton() {
    return (
        <ButtonIcon
            icon={<BackIcon />}
            text="חזרה"
            className="shadow-md"
            onClick={() =>
                window.history.back()
            }
        ></ButtonIcon>
    )
}

export default BackButton