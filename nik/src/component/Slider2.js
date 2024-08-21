import React from "react";
import Slider from "react-slick";
import { useState } from 'react';
 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
function Slider2() {
 
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
 
  const [settings] = useState(config);
 
  const products = [
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpgs',
      title: 'Dolore ',
      text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2022/12/15/20/08/curacao-7658440_1280.jpg',
      title: 'Eget est lorem',
      text: 'Lorem Ipsum adipiscing elit ipsum.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_1280.jpg',
      title: 'Tempus imperdiet',
      text: 'Orci porta non pulvinar neque laoreet.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2023/01/09/10/39/egret-7707108_1280.jpg',
      title: 'Mattis rhoncus',
      text: 'Bibendum neque egestas congue quisque.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2022/12/15/20/08/curacao-7658440_1280.jpg',
      title: 'Odio ut enim',
      text: 'Mattis rhoncus urna neque viverra justo.'
    }
  ]
 
  // const onChangeCenterMode = e => {
  //   if (e.target.checked) {
  //     setSettings({
  //       ...config,
  //       centerMode: true,
  //       centerPadding: '50px'
  //     });
  //   } else {
  //     setSettings(config);
  //   }
  // }
 
  return (
    <div classname="App">
      {/* <h3>Carousel Slider in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
 
      <label classname="cb-centermode">
        <input type="checkbox" checked="{settings.centerMode}" onchange="{onChangeCenterMode}" />
        <span>Enable Center Mode</span>
      </label> */}
 
      <Slider {...settings}>
        {products.map((x, i) => {
          return <div key="{i}" classname="img-card ">
            {/* <img classname="img" src="{x.img}" /> */}
            <div className="card-body">
              <div classname="card-title">{x.title}</div>
              <div classname="card-text">{x.text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}
 
export default Slider2;
