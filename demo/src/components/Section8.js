import React from 'react'
import img1 from '../assets/Journal-1.jpg'
import img2 from '../assets/Journal-2.jpg'

function Section8() {
  return (
    <section className='s-mt Journal-sec'>
      <div className='container'>
        <div className='container flex align-center'>

          <div className='left-part '>
            <img src={img1} className='' alt={img1} />
            <img src={img2} className='' alt={img2} />


          </div>
          <div className='right-part text-center '>
            <h2 className=''> Journal</h2>
            <h4> beautiful long earrings with
              opal and carnelian earrings
              are light in weight.</h4>
              <h2>A <span> ALL STORY</span></h2>
          </div>
          



        </div>
      </div>
    </section>
  )
}

export default Section8;
