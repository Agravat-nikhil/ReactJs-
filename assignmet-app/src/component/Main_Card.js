import React  from "react";
// import { Sdata } from "./Sdata";

const Main_Card=(props)=>{
return(
    <>
            
        <div className="col-md-3">
            <center>
                <div className="img-thumbnail shadow">
                        <img src={props.img} className="img-fluid" style={{width: '100%' , height: '250px'}} />
                        <p><b>{props.name}</b></p>
                        <p><b>Price</b>{props.price}<del>{props.del}</del></p>
                        <p><b><a href="#" className="btn btn-danger btn">click for More </a></b></p>
                </div>
            </center>
        </div>


    </>
);
}

export default Main_Card;