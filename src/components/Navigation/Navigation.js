import './Navigation.scss'
import React from "react"
import {
    Routes,
    Route,
    Link
} from "react-router-dom"
import { Contact } from "../../pages/Contact/Contact";
import { Fratures } from "../../pages/Fratures/Fratures";
import { Home } from "../../pages/Home/Home";
import { Listed } from "../../pages/Listed/Listed";
import { Service } from "../../pages/Service/Service";
import { MainButton } from '../MainButton/MainButton';

export const Navigation = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='header-menu'>
                        <div className='header-menu__leftSide'>
                            <nav>
                                <div className='logo'>
                                    <Link to="/">trvl.</Link>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/fratures">Fratures</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/listed">Listed</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='header-menu__rightSide'>
                            <nav>
                                <ul>
                                    <li className='header-menu__signIn'>
                                        <Link to="/signin">Sign in</Link>
                                    </li>
                                    <li>
                                        <MainButton path={'/signup'} name={'Sign up'} width={'98px'} height={'40px'} />
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fratures" element={<Fratures />} />
                <Route path="/service" element={<Service />} />
                <Route path="/listed" element={<Listed />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}