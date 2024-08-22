import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./component/Home";
import Vendor from "./component/Vendor"
import Layout from "./component/Layout";
import Deals from "./component/Deals";
import NoFound from "./component/NoFound";
import Service from "./component/Service";
import Contect from "./component/Contect";
import Index from "./component/Index";
import OurManu from "./component/OurManu";
import Blogs from "./component/Blogs";
import OrderTracking from "./component/OrderTracking";
import AboutPage from "./component/AboutPage";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Index/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Vendor" element={<Vendor />}/>
          <Route path="/Contect" element={<Contect/>}/>
          <Route path="/Deals" element={<Deals/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Ourmanu" element={<OurManu />}/>
           <Route path="*" element={<NoFound/>} />
           <Route path="/Blogs" element={<Blogs/>}/>
           <Route path="/Order-Tracking" element={<OrderTracking/>}/>
           <Route path="/About-page" element={<AboutPage/>}/>

           
         </Route>
      </Routes>
      </BrowserRouter>
 
    </div>
    </>
  );
}

export default App;
