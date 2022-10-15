import './Home.scss'
import React from "react"
import { HeaderContent } from '../../components/HeaderContent/HeaderContent'
import { Rating } from '../../components/Rating/Rating'
import { Guide } from '../../components/Guide/Guide'

export const Home = () => {
    return (
        <>
            <HeaderContent />
            <Rating />
            <Guide />
        </>
    )
}