import React from "react";
import { Link } from "react-router-dom";

const SignIn=()=>{
    return(

        <>
        
        
            <div  className="modal fade" id="exampleModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header" id="exampleModalLabel">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-6" style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2022/12/10/13/46/attack-7647136_1280.png)',backgroundSize:'100% 100%',height:'350px'}}>
                        <h3 className="pt-2">Login here</h3>
                        <p>Get access to your product</p>
                        <p>Recammandations</p>
                        </div>
                        <div className="col-6 abc">
                        <input className="pb-2" type='text' placeholder="Enter Email"/>
                        <input className=" pt-2 pb-2" type='password' placeholder="Enter Password"/>

                        <button className="btn btn-primary mt-3">Login</button>
                        <Link to='' className="m    s-1" style={{borderBottom:'2px solid blue'}}>Forget Password?</Link>

                        <p className="pt-5"><b>Don't have account ??</b></p>
                        <Link to='' className="ps-0" style={{borderBottom:'2px solid blue'}}>Register Here</Link>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
            </div>

       

        </>
    );
}

export default SignIn;