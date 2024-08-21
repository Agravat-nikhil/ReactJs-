import React from 'react';
import { MDBContainer} from 'mdb-react-ui-kit';
import {Outlet,Link} from 'react-router-dom';
var img1='images/404.gif';
function NoFound() {
    return (

        <React.Fragment>
            <MDBContainer fluid className="content bg-white p-2">
            
               <Link to="/"><img src={img1}  className="img-fluid" alt='404 not founds' /></Link>
        
            </MDBContainer>
             <Outlet />  
        </React.Fragment>

    )
}

export default NoFound;