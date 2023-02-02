import React from "react";
import Footer from "./Footer";

const m1= 'https://cdn.pixabay.com/photo/2020/07/20/21/49/moist-5424448_1280.jpg';

const Cart=()=>{
    return(
        <>
            <div className="Container">
                <div className="card w-50 mx-auto mt-5">
                    <div className="card-header bg-secondary text-white">
                        <h5>Shraddha Commerce </h5>
                    </div>
                    <div className="card-body">
                            <center>
                   
                       <img src={m1} className="img-fluid" style={{width: '60%' , height: '250px'}} />
                       <h3 className="pt-3"><b>Missing Cart items ?</b></h3>
                       <p><b>Login to see your products</b></p>
                       <p><b><a href="#" className="btn btn-primary btn">click for More </a></b></p>
                   
                         </center>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Cart;