import React, { useState } from "react";
import Iframe from 'react-iframe';
import Footer from "./Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: ""
        });
    };

    return (
        <>
            <button className="btn bg-info mt-5 py-2 text-white ms-5 p-2 text-center mt-2"> <b>contact with us</b></button>
            <h3 className="contact-h1 mt-5 ms-5">Our Office Address <i className="bi bi-geo-alt-fill"></i></h3>
            <div className="row">
                <div className="col-md-6 ms-5">
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d458.98301436173836!2d72.508666!3d23.028761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b767b0a48ed%3A0x713f82e619ac7868!2sTOPS%20Technologies%20-%20Best%20IT%20Training%20Institute%20in%20Ahmedabad!5e0!3m2!1sen!2sus!4v1724220891717!5m2!1sen!2sus"
                        width="650"
                        height="350"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
                <div className="col-md-5 ms-5 abc">
                    <h3>Contact form</h3>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter FirstName"
                        className="contact-input p-2"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter LastName"
                        className="contact-input p-2"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone"
                        className="contact-input p-2"
                    />
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Mail"
                        className="contact-input p-2"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Address"
                        className="contact-input p-2"
                    />
                    <div className="contact-btn d-inline-flex mx-5 p-0">
                        <button className="btn bg-info text-white mt-2">send</button>
                        <button
                            className="btn bg-danger text-white ms-2 mt-2"
                            onClick={handleReset}
                        >
                            reset
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
