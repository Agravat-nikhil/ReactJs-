import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./component/Account";
import Contect from "./component/Contect";
import Cart from "./component/Cart";
import Home from "./component/Home";
import IndexPage from "./component/IndexPage";
import Kids_products from "./component/Kids_product";
import Layout from "./component/Layout";
import Mens_products from "./component/Mens_product";
import Nopage from "./component/Nopage";
import Offer from "./component/Offer";
import Womens_products from "./component/Womens_peoduct";
import SignIn from "./component/SignIn";

const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route excet path="/" element={<Layout />}>
        <Route excet index element={<IndexPage/>}/>
        <Route excet path="Home" element={<Home />}/>
        <Route excet path="Womens_peoduct" element={<Womens_products/>}/>
        <Route excet path="Mens_product" element={<Mens_products/>}/>
        <Route excet path="Kids_product" element={<Kids_products/>}/>
        <Route excet path="Offer" element={<Offer/>}/>
        <Route excet path="Account" element={<Account/>}/>
        <Route excet path="SignIn" element={<SignIn/>}/>
        <Route excet path="Contect" element={<Contect/>}/>
        <Route excet path="Cart" element={<Cart />}/>
        <Route excet path="*" element={<Nopage/>}/>s
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;