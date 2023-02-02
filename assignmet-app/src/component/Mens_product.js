import React from "react";
import Footer from "./Footer";
import Main_Card from "./Main_Card";
import { Sdata } from "./Sdata";



const Mens_products=()=>{
    return(
        <>
        {/* <!-- content --> */}
<div className="container-fluid mt-2">

{/* <!-- mens products --> */}
<div className="card">
   <div className="card-header bg-dark text-white">
       <h5>Mens Products <button type="button" className="btn btn-sm btn-secondary float-end">view All</button>
       </h5>
   </div>
   <div className="card-body">
       <div className="row">

       {
        Sdata.map(function card(value){
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

export default Mens_products;