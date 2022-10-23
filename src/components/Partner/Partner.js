import './Partner.scss'
import React from "react"

export const Partner = ({ href, src }) => {
    let isAmazon = false
    if (href === 'https://amazon.com/') {
        isAmazon = true
    }

    return (
        <>
            {isAmazon ? (
                <a className='link-partner amazon' href={href} target='_blank'><img src={src} /></a>
            ) : (
                <a className='link-partner' href={href} target='_blank'><img src={src} /></a>
            )}
        </>
    )
}