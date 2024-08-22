import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

const AboutPage = () => {
  return (
    <MDBContainer fluid className="p-5">
      <MDBRow className="justify-content-center">
        <MDBCol md={10} lg={8} className="mb-4">
          <MDBCard className="shadow-4 border-0 rounded-3">
            <MDBCard.Body>
              <MDBCard.Title tag="h2" className="text-center mb-4">About Us</MDBCard.Title>
              <MDBTypography tag="p" className="text-muted mb-4">
                Welcome to NestBeans! We are a team of passionate developers dedicated to creating innovative and impactful solutions. Our mission is to harness technology to solve real-world problems and improve the lives of our users.
              </MDBTypography>
              <MDBTypography tag="p" className="text-muted mb-4">
                With years of experience in the tech industry, we specialize in software development, UI/UX design, and tech consulting. Our team is committed to delivering high-quality products and services that exceed our clients' expectations.
              </MDBTypography>
              <MDBBtn color="primary" className="mt-3" href="/contact">Contact Us</MDBBtn>
            </MDBCard.Body>
          </MDBCard>
        </MDBCol>
        <MDBCol md={10} lg={8} className="mb-4">
          <MDBCard className="shadow-4 border-0 rounded-3">
            <MDBCard.Body>
              <MDBCard.Title tag="h2" className="text-center mb-4">Our Values</MDBCard.Title>
              <MDBTypography tag="p" className="text-muted mb-4">
                At NestBeans, we value integrity, innovation, and collaboration. We believe in transparency and strive to build trust with our clients and partners.
              </MDBTypography>
              <MDBTypography tag="p" className="text-muted mb-4">
                Our team is driven by a passion for technology and a desire to make a positive impact. We embrace challenges and continuously seek opportunities for growth and learning.
              </MDBTypography>
            </MDBCard.Body>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutPage;
