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

export default function Vendor() {
  const cardsData = [
    {
      title: "Grapes Delight",
      image: "https://cdn.pixabay.com/photo/2017/03/18/22/45/chinatown-2155179__480.jpg",
      text: "Enjoy the sweet and juicy taste of our fresh grapes. Perfect for a healthy snack or adding flavor to your dishes!"
    },
    {
      title: "Mountain Escape",
      image: "https://cdn.pixabay.com/photo/2017/03/18/22/45/chinatown-2155179__480.jpg",
      text: "Experience the tranquility of the mountains. A perfect getaway for nature lovers and adventure seekers!"
    },
    {
      title: "Chinatown Adventure",
      image: "https://cdn.pixabay.com/photo/2017/03/18/22/45/chinatown-2155179__480.jpg",
      text: "Discover the vibrant colors and unique culture of Chinatown. A place where tradition meets modernity!"
    },
  ];

  return (
    <MDBContainer>
      <MDBRow>
        {cardsData.map((card, index) => (
          <MDBCol md="4" key={index}>
            <MDBCard className="mb-4">
              <MDBCardImage src={card.image} alt={card.title} position="top" height="300px" />
              <MDBCardBody>
                <MDBCardTitle>{card.title}</MDBCardTitle>
                <MDBCardText>{card.text}</MDBCardText>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
