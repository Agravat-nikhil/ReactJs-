import React from "react";
import Products from "./Products";
import Footer from "./Footer";


const s1='https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935__480.jpg';
const s2='https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472__480.jpg';
const s3='https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg';
const Offer=()=>{
    return(
        <>
           <div style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2021/02/07/07/01/sale-5990313_1280.jpg)',height:'400px', backgroundSize:'100% 100%'}}>
            <h2 style={{color:'white',textAlign:'center',paddingTop:'120px',fontSize:'50px',fontWeight:'700'}}> 50%</h2>
            <h2 style={{color:'white',textAlign:'center',fontSize:'43px',fontWeight:'700'}}> sale All Products</h2>
           </div>
           <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={s1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={s2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={s3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <Products />
    <Footer/>
        </>
    );
}

export default Offer;