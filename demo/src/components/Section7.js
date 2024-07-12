import React from 'react'
import img1 from '../assets/ring.png'
import img2 from '../assets/Ancient Jewelry.jpg'

const Section7 = () => {
    return (
        <section className='s-mt collection-sec'>
            <div className='container'>
            <div className='container small-container collection-block flex align-center'>

                <div className='left-part text-center'> 
                    <img src={img1} className='' alt={img1} />
                    <h3>Ancient Jewelry Collection</h3>
                    <p>Light in weight   ·   14 Karat gold   ·   Opal</p>
                    <a href='/' className='btn  btn-primary'>take a look</a>
                </div>
                <div className='right-part'>
                    <img src={img2} className='' alt={img2} />
                </div>



            </div>
            </div>
        </section>
    )
}

export default Section7
