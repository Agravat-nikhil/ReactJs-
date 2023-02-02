import React from "react";
import { Kdata } from "./Sdata";
import Main_Card from "./Main_Card";

import Footer from "./Footer";

const Kids_products=()=>{
    return(
        <>
        {/* <!-- content --> */}
<div className="container-fluid mt-2">

{/* <!-- kids products --> */}
<div className="card">
   <div className="card-header bg-dark text-white">
       <h5>Kids Products <button type="button" className="btn btn-sm btn-secondary float-end">view All</button>
       </h5>
   </div>
   <div className="card-body">
       <div className="row">

       {
        Kdata.map(function card(value){
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

export default Kids_products;