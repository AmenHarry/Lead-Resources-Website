import React from 'react'
import './products.css'

const Products = () => {
    return (
        <section className='products'>
            <h1 className='title'>Our Digital Products</h1>

            <div className='product-card'>
                <div className='card1'>
                    <h3>SDG Solution Convergence</h3>
                    <div className='card'>
                        <p>A holistic awareness on how to identify the problems by looking at the Sustainable Development Goals</p>
                    </div>
                </div>


                <div className='card2'>
                    <h3>Employability</h3>
                    <div className='card'>
                        <p>We provide a learning community for many graduates who leave school without the necessary competencies needed to get gainfully employed in the world of work...</p>
                    </div>
                </div>


                <div className='card3'>
                    <h3>Entrepreneurship</h3>
                    <div className='card'>
                        <p>Our Business Enterprise Training and Access to Finance Entrepreneurship initiative for Entrepreneurs involves the necessary digital skills to reach, attract and retain the market. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products