import React, { useState } from "react";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  // const [dropdown, setDropdown] = useState("")
  // const [dropdownClass, setDropdownClass] = useState("")

  return (
    <>
      {/* <!-- header --> */}
      <div className="container-fluid mt-0 p-4 header border border-bottom-2 bg-white shadow">
        <div className="row">
          <div className="col-md-3">
            <div className="call-us">
              <i className="bi bi-phone"></i> Call us:(+91)-9998003879
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="Search anything here!!!"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="social-media">
              <span className="bi bi-facebook fs-3 px-1"></span>
              <span className="bi bi-whatsapp fs-3 px-1"></span>
              <span className="bi bi-twitter fs-3 px-1"></span>
              <span className="bi bi-instagram fs-3 px-1"></span>
              <span className="bi bi-youtube fs-3 px-1"></span>
              <Link to="/Cart">
                {" "}
                <span className="bi bi-cart fs-3 px-1"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- navigations --> */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-0">
        {/* <!-- logo --> */}
        <Link to="/" className="p-2 text-white navbar-brand">
          <h4>Shraddha Commerce</h4>
        </Link>
        {/* <!-- collapse toggler button --> */}
        <button
          type="button"
          className="btn btn-secondary m-2 navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#ToggColl"
        >
          <i className="bi bi-grid-3x2-gap"></i>
        </button>
        <div className="collapse navbar-collapse" id="ToggColl">
          <ul className="navbar-link">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Womens_peoduct">Womens's products</Link>
            </li>
            <li>
              <Link to="/Mens_product">mens's products</Link>
            </li>
            <li>
              <Link to="/Kids_product">Kids's products</Link>
            </li>
            <li>
              <Link to="/Offer">Offers</Link>
            </li>
            {/* <!-- dropdown --> */}
            <li className="dropdown">
              <NavLink className="dropdown-toggle" data-bs-toggle="dropdown">
                
                  <i className="bi bi-person"></i> Account
                
              </NavLink>

              <ul className="dropdown-menu bg-dark">
                <NavLink to="/SignIn">
                  <li
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    SignIn!
                  </li>
                </NavLink>

                <Link to="*">SignUp!</Link>
              </ul>
            </li>
            <li>
              <Link to="/Contect">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
