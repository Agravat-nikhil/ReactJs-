import React from "react";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <>
         
    <div className="container-fluid footer bg-dark mt-5">
        <div className="row">
            <div className="col-md-6 p-5">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="footer-link">
                            <li><Link to="">
                                    <h4>Aboutus</h4>
                                </Link></li>
                            <li><Link to="">Conatctus</Link></li>
                            <li><Link to="">Carreers</Link></li>
                            <li><Link to="">Press</Link></li>
                            <li><Link to="">CorporateInfo</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-link">
                            <li><Link to="">
                                    <h4>Aboutus</h4>
                                </Link></li>
                            <li><Link to="">Conatctus</Link></li>
                            <li><Link to="">Carreers</Link></li>
                            <li><Link to="">Press</Link></li>
                            <li><Link to="">CorporateInfo</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 row-line">
                        <ul className="footer-link">
                            <li><Link to="">
                                    <h4>Aboutus</h4>
                                </Link></li>
                            <li><Link to="">Conatctus</Link></li>
                            <li><Link to="">Carreers</Link></li>
                            <li><Link to="">Press</Link></li>
                            <li><Link to="">CorporateInfo</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <address className="p-2">
                            <p className="text-white">
                                <b>Mail Us:</b>
                                <br />
                                <p className="text-white">Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India</p>

                            </p>
                        </address>
                    </div>
                    <div className="col-md-6 p-5">
                        <address className="p-2">
                            <p className="text-white">
                                <b>Mail Us:</b>
                                <br />
                            <p className="text-white">Flipkart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103,<br />
                                Karnataka, India</p>

                            </p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <p className="text-center pb-3" style={{color:'White'}}> Copyright 2@23 @ All right reserved by Compney</p>
    </div>
            
        </>
    );
}

export default Footer;