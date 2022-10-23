import './MainButton.scss'
import React from "react"
import { Link } from "react-router-dom"

export const MainButton = ({ path, name, width, height }) => {
    let styles = {
        width: width,
        height: height
    }

    return (
        <div className="main-button" style={styles}>
            <Link to={path}>{name}</Link>
        </div>
    )
}