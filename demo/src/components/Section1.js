import React from 'react'
import downarrow from "../assets/down-arrow.svg"
import faceboock from "../assets/faceboock.svg"
import insta from "../assets/insta.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"

const Section2 = () => {
    return (
        <section className='main-banner flex '>
            <div className='banner-content container flex'>
                <div>
                    <h1>finest <br /> jewelry,</h1>
                    <h4>inspired by our life.</h4>
                    <a href="/" className='btn'>create your own</a>
                </div>
            </div>
            <div className='down-arrow'>
                <img src={downarrow} alt="" />
            </div>
            <ul className="social-links flex align-center">
                <li><a href="/"><img src={faceboock} alt={faceboock} />faceboock</a></li>
                <li><a href="/"><img src={insta} alt={insta} />intsagram</a></li>
                <li><a href="/"><img src={linkedin} alt={linkedin} />linkedin</a></li>
                <li><a href="/"><img src={twitter} alt={twitter} />twitter</a></li>
            </ul>
        </section>
    )
}

export default Section2
