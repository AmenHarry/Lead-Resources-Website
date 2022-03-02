import React from 'react'
import Header from './Header'
import './Hero.css'
import hero1 from '../images/hero1.png'
import hero2 from '../images/hero2.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='filter'>
                <Header />
                <div className='landing'>
                    <h1>We help you build a better and sustainable business</h1>
                    <div className='hero-images'>
                        <img src={hero1} alt='hero1' className='hero1' />
                        <img src={hero2} alt='hero2' className='hero2' />

                    </div>
                </div></div>






        </div>


    )
}

export default Hero