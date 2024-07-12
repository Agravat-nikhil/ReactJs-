import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/slider-img1.jpg"
import img2 from "../assets/slider-img2.jpg"
import img3 from "../assets/slider-img3.png"
import img4 from "../assets/slider-img4.jpg"
import ikon from "../assets/small-heart.svg"

const Section4 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const sliderData = [
        { img: img1, },
        { img: img2, },
        { img: img3, },
        { img: img4, },
    ]

    return (
        <section className='s-mt'>
            <div className=" container">
                <div className="slider-sec flex align-center space-between">
                    <div className="slider-content">
                        <h4>New Collection Products</h4>
                        <p>Best products on sale.</p>
                        <a href="/" className='btn btn-primary'>View all</a>
                    </div>
                    <Slider {...settings}>
                        {sliderData.map((item) => (
                            <div key={item.img} className='slider-card'>
                                <a href="/">
                                    <img src={item.img} alt={item.img} />
                                </a>
                                <span className='mb-10'>Medina Round Ring</span>
                                <a href="/"><h6 className='mb-10'>18ct Gold Plated Vermeil</h6></a>
                                <hr className='mb-10' />
                                <div className='flex price'>
                                    <h6><del>$80.00</del></h6>
                                    <h6>$75.00</h6>
                                </div>
                                <div className='cart-menu flex align-center'>
                                    <a href='/' className='icon'><img src={ikon} alt={ikon} /></a>
                                    <a href="/" className='cart-btn'>Add To Bag</a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div >
            </div>
        </section >
    )
}

export default Section4
