import './LightBlueButton.scss'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const LightBlueButton = ({ linkText }) => {
    return (
        <a className='light-blue-button' href='#'>
            {linkText}
            <FontAwesomeIcon icon={faArrowRightLong} />
        </a>
    )
}