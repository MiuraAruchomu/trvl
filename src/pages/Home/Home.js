import './Home.scss'
import React from "react"
import { HeaderContent } from '../../components/HeaderContent/HeaderContent'
import { Rating } from '../../components/Rating/Rating'

export const Home = () => {
    return (
        <>
            <HeaderContent />
            <Rating />
        </>
    )
}