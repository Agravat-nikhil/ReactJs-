import React,{useState} from 'react'
import logo from '../assets/logo.svg'
import cart from "../assets/cart.svg"
import heart from "../assets/heart.svg"
import search from "../assets/search.svg"
import menubar from "../assets/menu.svg"

const Header = () => {
    const [headerFixed, setheaderFixed] = useState(false);
      // fixnavbar
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setheaderFixed(true);
        } else {
            setheaderFixed(false);
        }
    });

    return (
        <header className={`header ${headerFixed ? "header-fixed " : ""}`}>
            <div className="main-header flex align-center space-between">
                <a className="logo" href="/">
                    <img src={logo} alt="365 Day Loan" />
                </a>
                <div className="menu-btn">
                    <span className="menu-line"></span>
                </div>
                <div className="header-right flex align-center">
                    <nav className="navbar">
                        <ul className="menu-wrapper">
                            <li><a href="/"><img src={search} alt={search} /></a></li>
                            <li><a href="/"><img src={heart} alt={heart} /></a></li>
                            <li><a href="/"><img src={cart} alt={cart} /></a></li>
                            <li><a href="/"><img src={menubar} alt={menubar} /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
