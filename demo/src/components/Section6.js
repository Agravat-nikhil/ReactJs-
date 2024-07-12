import React from 'react'
import img from "../assets/Antique-img.jpg"

const Section6 = () => {
    return (
        <section className='s-mt antique-sec '>
            <div className="container">
                <div className="flex align-center">
                    <div className="left-part"><img src={img} alt={img} /></div>
                    <div className="right-part">
                        <h2>Antique <br />
                        Diamond Necklaces</h2>
                        <h5><i> beautiful colors. excellent quality. </i></h5>
                        <a href="/" className='btn btn-primary'>discover</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6
