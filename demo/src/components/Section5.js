import React from 'react'
import img1 from '../assets/Latest -collections-1.jpg'
import img2 from '../assets/Latest -collections-2.jpg'

const Section5 = () => {
    return (
        <section className='s-mt latest-collection-sec'>
            <div className="container">
                <div className='flex align-center'>
                    <div className="left-part">
                        <img src={img1} alt={img1} />
                    </div>
                    <div className="center-part">
                        <img src={img2} alt={img2} />
                    </div>
                    <div className="right-part">
                        <h4>Latest <br />
                        collections</h4>
                        <p className='flex align-center light-text'><div></div>NECKLACES</p>
                        <p>EARRINGS</p>
                        <p>BRACELETS</p>
                        <a href="/" className='btn btn-primary'>Create your Jewelry</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5