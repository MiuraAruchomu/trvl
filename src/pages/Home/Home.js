import './Home.scss'
import React from "react"
import { HeaderContent } from '../../components/HeaderContent/HeaderContent'

export const Home = () => {
    return (
        <div className='home-page__header'>
            <div className="container">
                <HeaderContent />
            </div>
        </div>
    )
}