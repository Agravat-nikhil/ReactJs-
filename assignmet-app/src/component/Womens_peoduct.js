import React from "react";
import Main_Card from "./Main_Card";
import { Wdata } from "./Sdata";
import Footer from "./Footer";

const Womens_products=()=>{
    return(
        <>
    <div className="container-fluid mt-2">
        
        <div className="card">
            <div className="card-header bg-dark text-white">
                <h5>womens Products <button type="button" className="btn btn-sm btn-secondary float-end">view All</button>
                </h5>
            </div>
            <div className="card-body">
                <div className="row">

                {
                 Wdata.map(function card(value){
                return(
                <Main_Card 
                img={value.img}
                name={value.name}
                price={value.price}
                del={value.del}
                />
            );
            
        })
       }

                </div>
            </div>
        </div>





        
    </div>

    <Footer/>
        </>
    );
}

export default Womens_products;