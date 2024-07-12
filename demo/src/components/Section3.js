import React from 'react'
import product1 from "../assets/jewelry-1.jpg"
import product2 from "../assets/jewelry-2.jpg"
import product3 from "../assets/jewelry-3.jpg"
import product4 from "../assets/jewelry-4.png"

const Section3 = () => {

    return (
        <section className='jewelry-collection s-mt'>
            <div className="container">
                <div className='title text-center'>
                    <h4>The perfect jewelry for you</h4>
                    <p>Inspired by the natural beauty, we offer the finest materials handcrafted in our Antwerp ateliers at transparent pricing.</p>
                </div>
                <div className=' products'>
                    <div className="product">
                        <img src={product1} alt={product1} />
                        <a href='/' className='btn btn-primary' >Necklace</a>
                    </div>
                    <div className='product product-b flex'>
                        <div className="product">
                            <img src={product2} alt={product2} />
                            <a href='/' className='btn btn-primary' >Earings</a>
                        </div>
                        <div className="product">
                            <img src={product3} alt={product3} />
                            <a href='/' className='btn btn-primary' >rings</a>
                        </div>
                    </div>
                    <div className="product">
                        <img src={product4} alt={product4} />
                        <a href='/' className='btn btn-primary' >bracelets </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3
