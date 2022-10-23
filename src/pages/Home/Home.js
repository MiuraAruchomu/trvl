import './Home.scss'
import React from "react"
import { MainButton } from '../../components/MainButton/MainButton'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MeUndies from './img/logoMeUndies.svg'
import Slack from './img/logoSlack.svg'
import Amazon from './img/logoAmazon.svg'
import WooCommerce from './img/logoWooCommerce.svg'
import Sitepoint from './img/logoSitepoint.svg'
import { Partner } from '../../components/Partner/Partner'
import Buyer from './img/buyer.svg'
import Renter from './img/renter.svg'
import Seller from './img/seller.svg'
import { GiudeBlock } from '../../components/GuideBlock/GuideBlock'

export const Home = () => {
    return (
        <>
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
                        <MainButton path={'/fratures'} name={'More About Us'} width={'170px'} height={'50px'} />
                    </div>
                </div>
            </div>
            <div className="rating">
                <div className="container">
                    <div className="rating-top">
                        <div className="rating-top__leftSide">
                            <div className='rating-top__leftSide-content'>
                                <div className="logo">trvl.</div>
                                <div className="text">
                                    More than 45,000+ companies trust trvl
                                </div>
                            </div>
                        </div>
                        <div className="rating-top__rightSide">
                            <div className='rating-top__rightSide-content'>
                                <div className='review'>
                                    <FontAwesomeIcon icon={faStar} color='#FFCA56' />
                                    <FontAwesomeIcon icon={faStar} color='#FFCA56' />
                                    <FontAwesomeIcon icon={faStar} color='#FFCA56' />
                                    <FontAwesomeIcon icon={faStar} color='#FFCA56' />
                                    <FontAwesomeIcon icon={faStar} color='#FFCA56' />
                                </div>
                                <div className='text'>
                                    5 Star Ratings (2k+ Review)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rating-bottom">
                        <Partner href={'https://www.meundies.com/'} src={MeUndies} />
                        <Partner href={'https://slack.com/'} src={Slack} />
                        <Partner href={'https://amazon.com/'} src={Amazon} />
                        <Partner href={'https://woocommerce.com/'} src={WooCommerce} />
                        <Partner href={'https://sitepoint.com/'} src={Sitepoint} />
                    </div>
                </div>
            </div>
            <div className="guide">
                <div className="container">
                    <div className="guide-content">
                        <div className="guide-content__top">
                            <hr />
                            <div className='header'>
                                How its works ?
                            </div>
                            <div className='subtitle'>
                                Everything you need to know when you're looking to buy,
                                rent, or sell - all in one place.
                            </div>
                        </div>
                        <div className="guide-content__center">
                            <GiudeBlock src={Buyer} text={'Buyer Guides'} linkText={'How to buy'} />
                            <GiudeBlock src={Renter} text={'Renter Guides'} linkText={'How to rent'} />
                            <GiudeBlock src={Seller} text={'Seller Guides'} linkText={'How to sell'} />
                        </div>
                        <div className="guide-content__bottom">
                            <MainButton path={'/guidelines'} name={'See Full Guidelines'} width={'170px'} height={'50px'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}