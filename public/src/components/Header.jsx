import React from 'react'
import './Header.css'
import logo from '../images/logo.png'


const Header = () => {
    return (
        <div className='head'>

            <img src={logo} alt="" className='logo' />

            <div>
                <ul className='links'>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Digital Products</li>
                    <li>Event</li>
                </ul>

            </div>
        </div>


    )
}

export default Header