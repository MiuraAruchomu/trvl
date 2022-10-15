import './HeaderContent.scss'
import React from "react"
import {
    Link
} from "react-router-dom"

export const HeaderContent = () => {
    return (
        <div className='header-content__bg'>
            <div className='container'>
                <div className="header-content">
                    <div className="header-content__overhead">
                        Welcome to trvl Agency
                    </div>
                    <div className="header-content__header">
                        Discover a place
                        you'll love to live.
                    </div>
                    <div className="header-content__subtitle">
                        Get the best real estate deals first,
                        before they hit the mass market! HOT FORECLOSURE DEALS with one simple search
                    </div>
                    <div className='header-content__btn btn'><Link to="/fratures">More About Us</Link></div>
                </div>
            </div>
        </div>
    )
}