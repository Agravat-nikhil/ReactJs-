import React from 'react'
import ourStory from "../assets/our-story.png"

const Section2 = () => {
    return (
        <section className='s-mt our-story-sec'>
            <div className='container'>
                <h2 className='bg-text'><span>jewelry</span> <span>selection</span></h2>
            </div>
            <div className="block">
                <h4>It has always been to produce awesome
                    products for the dynamic urban lifestyle of the
                    modern woman.
                </h4>
                <img src={ourStory} alt={ourStory} />
            </div>
        </section>
    )
}

export default Section2
