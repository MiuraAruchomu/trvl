import './Guide.scss'
import React from "react"
import { Link } from 'react-router-dom'

export const Guide = () => {
    return (
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
                        <div className='buyer'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9469 12.5043L44.7023 27.2131C44.3361 28.875 43.4081 30.3761 42.0897 31.4407C40.7673 32.5085 39.1014 33.0967 37.3993 33.0967C36.364 33.0967 35.5247 32.2573 35.5247 31.222C35.5247 30.1864 36.364 29.3474 37.3993 29.3474C39.1615 29.3474 40.6589 28.1378 41.0413 26.4056L44.2855 11.6968C44.5085 10.6857 45.5087 10.0466 46.5201 10.2697C47.5312 10.4927 48.1699 11.4932 47.9469 12.5043ZM42.9294 42.4698C42.9294 45.5193 40.4487 48 37.3993 48C34.3498 48 31.8691 45.5193 31.8691 42.4698C31.8691 41.8469 31.9742 41.2482 32.165 40.689H24.0747C24.2655 41.2482 24.3706 41.8469 24.3706 42.4698C24.3706 45.5193 21.8895 48 18.8401 48C15.791 48 13.3099 45.5193 13.3099 42.4698C13.3099 41.8469 13.415 41.2482 13.6058 40.689H12.8412C9.74048 40.689 7.21728 38.1661 7.21728 35.0651C7.21728 35.049 7.21948 35.0339 7.21985 35.0182C7.21948 35.0024 7.21728 34.9871 7.21728 34.9713C7.21728 32.6957 8.57666 30.7332 10.5249 29.8484L8.29651 9.37537C7.86621 6.17175 5.10901 3.75842 1.87463 3.75842C0.839355 3.75842 0 2.91907 0 1.88379C0 0.848145 0.839355 0.00915527 1.87463 0.00915527C6.99097 0.00915527 11.3511 3.83459 12.0165 8.90698L12.0212 8.94836L14.2419 29.3474H28.0261C29.0614 29.3474 29.9008 30.1868 29.9008 31.222C29.9008 32.2573 29.0614 33.0967 28.0261 33.0967H12.8412C11.8077 33.0967 10.9666 33.9375 10.9666 34.9713C10.9666 34.9871 10.9647 35.0024 10.9644 35.0182C10.9647 35.0339 10.9666 35.0493 10.9666 35.0651C10.9666 36.0989 11.8077 36.9397 12.8412 36.9397H37.3993C40.4487 36.9397 42.9294 39.4204 42.9294 42.4698ZM18.8401 40.689C17.8583 40.689 17.0592 41.4877 17.0592 42.4698C17.0592 43.452 17.8583 44.2507 18.8401 44.2507C19.8223 44.2507 20.621 43.452 20.621 42.4698C20.621 41.4877 19.8223 40.689 18.8401 40.689ZM39.1802 42.4698C39.1802 41.4877 38.3811 40.689 37.3993 40.689C36.4171 40.689 35.6184 41.4877 35.6184 42.4698C35.6184 43.452 36.4171 44.2507 37.3993 44.2507C38.3811 44.2507 39.1802 43.4517 39.1802 42.4698ZM15.7632 11.9524C15.0685 11.1848 15.1274 9.99939 15.895 9.30469L24.6306 1.39856C26.6741 -0.466187 29.7528 -0.466187 31.7963 1.39856L40.5319 9.30469C41.2994 9.99939 41.3584 11.1848 40.6637 11.9524C40.2938 12.3615 39.7844 12.5691 39.2732 12.5691C38.9147 12.5691 38.5558 12.4651 38.2427 12.2582V17.5983C38.2427 20.5104 35.8751 22.8798 32.9652 22.8798H23.3679C20.458 22.8798 18.0905 20.5104 18.0905 17.5983V12.3175C17.3412 12.7507 16.3671 12.6196 15.7632 11.9524ZM21.8339 8.98645C21.8361 9.02454 21.8397 9.06262 21.8397 9.10107V17.5979C21.8397 18.4431 22.5253 19.1305 23.3679 19.1305H32.9652C33.8079 19.1305 34.4934 18.4431 34.4934 17.5979V9.10107C34.4934 9.03516 34.4971 8.96997 34.5037 8.90588L29.2771 4.17554C29.2749 4.17334 29.2723 4.17114 29.2701 4.16895C28.6677 3.61853 27.7592 3.61853 27.1567 4.16895C27.1545 4.17114 27.1523 4.17334 27.1501 4.17554L21.8339 8.98645Z" fill="#3B3C45" />
                            </svg>
                            <div className='buyer-text'>
                                Buyer Guides
                            </div>
                            <a href='#'>
                                How to buy
                                <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.24 7.68C21.1127 7.84974 20.9232 7.96196 20.7131 7.99196C20.5031 8.02197 20.2897 7.96731 20.12 7.84C19.9503 7.7127 19.838 7.52318 19.808 7.31314C19.778 7.1031 19.8327 6.88974 19.96 6.72L21.4 4.8L0.800001 4.8C0.587827 4.8 0.384344 4.71571 0.234316 4.56569C0.0842855 4.41566 1.72323e-06 4.21217 1.7325e-06 4C1.74178e-06 3.78783 0.0842856 3.58434 0.234316 3.43431C0.384344 3.28429 0.587828 3.2 0.800001 3.2L21.4 3.2L19.96 1.28C19.897 1.19595 19.8511 1.10032 19.825 0.998545C19.799 0.896774 19.7932 0.790864 19.808 0.686863C19.8229 0.582861 19.8581 0.482804 19.9116 0.392405C19.9651 0.302005 20.036 0.223034 20.12 0.16C20.204 0.0969651 20.2997 0.051102 20.4015 0.0250287C20.5032 -0.00104454 20.6091 -0.00681701 20.7131 0.00804037C20.8171 0.0228978 20.9172 0.058094 21.0076 0.11162C21.098 0.165146 21.177 0.235954 21.24 0.32L23.6352 3.5136L23.6456 3.5272L24 4L23.6456 4.472L23.6352 4.4864L21.24 7.68Z" fill="#0689FF" />
                                </svg>
                            </a>
                        </div>
                        <div className='renter'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5532 17.7604L24.0003 4.86811L8.44751 17.7604V24.5453H4.69965V20.867L2.39176 22.7805L0 19.8951L24.0003 0L48.0007 19.8951L45.6089 22.7805L43.301 20.867V24.5453H39.5532V17.7604ZM13.6943 47.9685H22.2202V44.2206H17.4418V38.9738H22.2202V35.2263H17.4418V31.4785H22.2202V27.731H13.6943V47.9685ZM38.0543 31.4785H41.1462V47.9685H44.8937V31.4785H47.9857V27.731H38.0543V31.4785ZM8.06664 38.4212L11.3216 47.9685H7.36204L4.29572 38.9742H3.76287V47.9685H0.0150148V27.731H5.6368C8.73645 27.731 11.2582 30.2528 11.2582 33.3524C11.2582 35.5823 9.95302 37.513 8.06664 38.4212ZM3.76287 35.2263H5.6368C6.6699 35.2263 7.51036 34.3855 7.51036 33.3524C7.51036 32.3193 6.6699 31.4785 5.6368 31.4785H3.76287V35.2263ZM31.9641 37.1797L28.5726 27.8409L28.4975 27.868V27.731H24.75V47.9685H28.4975V38.6131L31.8894 47.9523L31.9641 47.9252V47.9685H35.7119V27.731H31.9641V37.1797Z" fill="#3B3C45" />
                            </svg>
                            <div className='renter-text'>
                                Renter Guides
                            </div>
                            <a href='#'>
                                How to rent
                                <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.24 7.68C21.1127 7.84974 20.9232 7.96196 20.7131 7.99196C20.5031 8.02197 20.2897 7.96731 20.12 7.84C19.9503 7.7127 19.838 7.52318 19.808 7.31314C19.778 7.1031 19.8327 6.88974 19.96 6.72L21.4 4.8L0.800001 4.8C0.587827 4.8 0.384344 4.71571 0.234316 4.56569C0.0842855 4.41566 1.72323e-06 4.21217 1.7325e-06 4C1.74178e-06 3.78783 0.0842856 3.58434 0.234316 3.43431C0.384344 3.28429 0.587828 3.2 0.800001 3.2L21.4 3.2L19.96 1.28C19.897 1.19595 19.8511 1.10032 19.825 0.998545C19.799 0.896774 19.7932 0.790864 19.808 0.686863C19.8229 0.582861 19.8581 0.482804 19.9116 0.392405C19.9651 0.302005 20.036 0.223034 20.12 0.16C20.204 0.0969651 20.2997 0.051102 20.4015 0.0250287C20.5032 -0.00104454 20.6091 -0.00681701 20.7131 0.00804037C20.8171 0.0228978 20.9172 0.058094 21.0076 0.11162C21.098 0.165146 21.177 0.235954 21.24 0.32L23.6352 3.5136L23.6456 3.5272L24 4L23.6456 4.472L23.6352 4.4864L21.24 7.68Z" fill="#0689FF" />
                                </svg>
                            </a>
                        </div>
                        <div className='seller'>
                            <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34 12.916V5.00004C34 3.89404 33.104 3.00004 32 3.00004C30.896 3.00004 30 3.89404 30 5.00004V9.00404L22.398 1.57004C21.62 0.808035 20.378 0.808035 19.602 1.57004L0.878 19.874C0.32 20.438 0 21.212 0 22C0 23.654 1.346 25 3 25H6V36C6 38.758 8.244 41 11 41H16C17.104 41 18 40.106 18 39C18 37.894 17.104 37 16 37H11C10.448 37 10 36.55 10 36V23C10 21.894 9.104 21 8 21H5.446L21 5.79604L34.102 18.608C34.894 19.382 36.158 19.368 36.93 18.576C37.702 17.786 37.688 16.52 36.898 15.748L34 12.916Z" fill="#3B3C45" />
                            </svg>
                            <svg className='seller-coin' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0C5.832 0 0 5.832 0 13C0 20.168 5.832 26 13 26C20.168 26 26 20.168 26 13C26 5.832 20.168 0 13 0ZM12.75 11.5H13.25C15.318 11.5 17 13.182 17 15.25C17 16.876 15.952 18.252 14.5 18.77V19.5C14.5 20.328 13.828 21 13 21C12.172 21 11.5 20.328 11.5 19.5V19H10.5C9.672 19 9 18.328 9 17.5C9 16.672 9.672 16 10.5 16H13.25C13.664 16 14 15.664 14 15.25C14 14.836 13.664 14.5 13.25 14.5H12.75C10.682 14.5 9 12.818 9 10.75C9 9.124 10.048 7.748 11.5 7.23V6.5C11.5 5.672 12.172 5 13 5C13.828 5 14.5 5.672 14.5 6.5V7H15.5C16.328 7 17 7.672 17 8.5C17 9.328 16.328 10 15.5 10H12.75C12.336 10 12 10.336 12 10.75C12 11.164 12.336 11.5 12.75 11.5Z" fill="#3B3C45" />
                            </svg>
                            <div className='seller-text'>
                                Seller Guides
                            </div>
                            <a href='#'>
                                How to sell
                                <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.24 7.68C21.1127 7.84974 20.9232 7.96196 20.7131 7.99196C20.5031 8.02197 20.2897 7.96731 20.12 7.84C19.9503 7.7127 19.838 7.52318 19.808 7.31314C19.778 7.1031 19.8327 6.88974 19.96 6.72L21.4 4.8L0.800001 4.8C0.587827 4.8 0.384344 4.71571 0.234316 4.56569C0.0842855 4.41566 1.72323e-06 4.21217 1.7325e-06 4C1.74178e-06 3.78783 0.0842856 3.58434 0.234316 3.43431C0.384344 3.28429 0.587828 3.2 0.800001 3.2L21.4 3.2L19.96 1.28C19.897 1.19595 19.8511 1.10032 19.825 0.998545C19.799 0.896774 19.7932 0.790864 19.808 0.686863C19.8229 0.582861 19.8581 0.482804 19.9116 0.392405C19.9651 0.302005 20.036 0.223034 20.12 0.16C20.204 0.0969651 20.2997 0.051102 20.4015 0.0250287C20.5032 -0.00104454 20.6091 -0.00681701 20.7131 0.00804037C20.8171 0.0228978 20.9172 0.058094 21.0076 0.11162C21.098 0.165146 21.177 0.235954 21.24 0.32L23.6352 3.5136L23.6456 3.5272L24 4L23.6456 4.472L23.6352 4.4864L21.24 7.68Z" fill="#0689FF" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="guide-content__bottom">
                        <div className='btn guide-btn'>
                            <Link to="/guidelines">See Full Guidelines</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}