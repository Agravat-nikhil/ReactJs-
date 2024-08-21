import React from "react";
import Footer from "./Footer";
const deals = "https://thumbs.dreamstime.com/z/fantastic-hot-deals-promotion-sale-poster-design-50937452.jpg";
const style = {
    'height': '500px',
    'padding':'5px',
    "width": "23%"
}
const main = {
    'display': 'flex',
    'width': '100%',
    justifyContent: "center"
}
export default function Deals() {
    return (
        <>
            <div className="main" style={main}>       
          
            <img src={deals }  style={style} alt="" />

            <img src={deals }  style={style} alt="" />

            <img src={deals }  style={style} alt="" />

            </div>

            <Footer/>

        </>    
    );
}