import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Service() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol  md="4">
            <MDBCard className="card"  >
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2015/07/15/07/21/olive-845761__480.jpg"
                alt="..."
                height="300px"
              />
              <MDBCardBody>
                <MDBCardTitle>Lorem</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis veniam libero, tempore, sunt tenetur nam itaque
                
                </MDBCardText>
                <MDBBtn>Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* second card */}
          <MDBCol md="4">
            <MDBCard className="card">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg"
                height="300px"
              />
              <MDBCardBody>
                <MDBCardTitle>Ipsum</MDBCardTitle>
                <MDBCardText>
                
                  corrupti quia, blanditiis impedit maiores? Et aliquid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Add to cart</MDBBtn>

              </MDBCardBody>
            </MDBCard>
                  </MDBCol>

                  <MDBCol md="4">
            <MDBCard className="card">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2017/03/18/22/45/chinatown-2155179__480.jpg"
                alt="..."
                height="300px"
              />
              <MDBCardBody>
                <MDBCardTitle>Lorem ipsum</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Offuid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Add to cart</MDBBtn>

              </MDBCardBody>
            </MDBCard>
                  </MDBCol>
        </MDBRow>
      </MDBContainer>
         </>
  );
}
