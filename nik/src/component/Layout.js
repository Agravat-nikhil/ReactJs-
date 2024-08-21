import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBRow, MDBNavbar } from 'mdb-react-ui-kit';

function Layout() {
  return (
    <>
      <MDBContainer fluid className="p-2 ">
        <MDBRow>
          <div className="col-md-3 ms-5">
            <Link to="/">About</Link> |  <Link to="Contect">Contact Us</Link> |{' '}
            <Link to="/">Order Tracking</Link>
          </div>
        
          <div className="col-md-3">
            Get great devices up to 50% <Link to="/" className="text-success">View Details</Link>
          </div>
          
          <div className="col-md-5  ms-4">
            <Link to="/">Need Help?</Link> | Call Us{' '}
            <b className="text-success">(+91)-8160764343</b>
            <i className="bi bi-c-circle"></i>

            <select name="language" className="border-0 bg-light ms-2">
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Gujarati</option>
            </select>
            
            <select name="currency" className="border-0 bg-light ms-1 ">
              <option value="">USD</option>
              <option value="">INR</option>
            </select>
          </div>
          <hr className="border border-1 border-dark mt-1" />
        </MDBRow>


        <MDBRow>
          <div className="col-md-2 ms-5 logo pb-0 mt-1">
            <Link to="/" className="navbar-brand text-success">
              NestBeans
            </Link>
          </div>

          <div className="col-md-3  mt-3">
            <form>
              <div className="input-group input-decrement">
                <input type="text" name="search" placeholder="Search" className="form-control" />
                <span className="input-group-text text-dark">
                  <i className="bi bi-search text-dark"></i>
                </span>
              </div>
            </form>
          </div>

          <div className="col-md-6 mt-3 ms-5 ">

            <select name="location" className="border-0 bg-light">
              <option value="">Locations</option>
              <option value="">Gujarat</option>
            </select>

            <Link to="*" className="ms-4">
              <i className="fas fa-refresh fa-lg"></i>
              <span className="badge bg-danger badge-notification">0</span>
              <span className="text-dark ms-2">Compare</span>
            </Link>

            <Link to="*" className="ms-4">
              <i className="fas fa-cart-shopping fa-lg"></i>
              <span className="badge bg-success badge-notification">0</span>
              <span className="text-dark ms-2">Wishlist</span>
            </Link>

            <Link to="*" className="ms-4">
              <i className="fas fa-shopping-bag fa-lg"></i>
              <span className="badge bg-success badge-notification">0</span>
              <span className="text-dark ms-2">Cart</span>
            </Link>

            <Link to="*" className="ms-4">
              <i className="fas fa-users fa-lg"></i>
              <span className="text-dark ms-2">Account</span>
            </Link>
          </div>

          <hr className="border border-1 border-dark mt-1" />
        </MDBRow>
      </MDBContainer>

      <MDBNavbar className="navbar navbar-expand-lg p-2">
        <MDBBtn type="button" className="ms-5 btn btn-sm btn-outline-dark mb-2 p-2">
          Nest All Categories
        </MDBBtn>

        <MDBBtn
          type="button"
          className="navbar-toggler ms-5 btn btn-outline-btn-dark"
          data-bs-toggle="collapse"
          data-bs-target="#btnColl"
        >
          <i className="bi bi-grid-3x3"></i>
        </MDBBtn>

        <div className="collapse navbar-collapse" id="btnColl">
          <ul className="navbar-link">
            <li>
              <Link to="Deals">Hot Deals</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                About
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="NoFound">Who We Are?</Link>
                </li>
                <li>
                  <Link to="NoFound">Chairman Messages</Link>
                </li>
                <li>
                  <Link to="NoFound">About Us</Link>
                </li>
                <li>
                  <Link to="NoFound">Our Locations</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="Vendor">Vendors</Link>
            </li>
            <li>
              <Link to="Ourmanu">Our Menu</Link>
            </li>
            <li>
              <Link to="NoFound">Blogs</Link>
            </li>
            <li>
              <Link to="Contect">Contact</Link>
            </li>
            <li>
              <Link to="Service">Our Services</Link>
            </li>
            <li className="ms-2">
              <b>
                <i className="bi bi-phone"></i> 1800-95955
              </b>
            </li>
          </ul>
        </div>

        <hr className="border border-1 border-dark mt-1" />

      </MDBNavbar>

      <Outlet />
    </>
  );
}

export default Layout;
