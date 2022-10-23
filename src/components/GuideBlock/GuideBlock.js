import './GuideBlock.scss'
import React from "react"
import { LightBlueButton } from '../LightBlueButton/LightBlueButton'

export const GiudeBlock = ({ src, text, linkText }) => {
    return (
        <div className='guide-block'>
            <img src={src} />
            <div className='guide-text'>
                {text}
            </div>
            <LightBlueButton linkText={linkText} />
        </div>
    )
}