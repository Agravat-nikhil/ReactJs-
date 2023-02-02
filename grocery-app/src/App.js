import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./component/Home";
import NoFound from "./component/NoFound";
import Layout from "./component/Layout";
import Deals from "./component/Deals";
import Vendor from "./component/Vendor"
import Service from "./component/Service";
import Contect from "./component/Contect";
import Index from "./component/Index";
function App() {
  return (
    <React.Fragment>
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Index/>}/>
          <Route path="/Home" element={<Home/>} />
          {/* <Route path="aboutus" element={<About/>} /> */}
          <Route path="/Contect" element={<Contect/>}/>
          <Route path="/Deals" element={<Deals/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Vendor" element={<Vendor />}/>
           <Route path="*" element={<NoFound/>} />
         </Route>
      </Routes>
      </BrowserRouter>
 
    </div>
    </React.Fragment>
  );
}

export default App;
