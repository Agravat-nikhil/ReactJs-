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

export default function OurManu() {
  const cardsData = [
    {
      title: "Grapes Delight",
      image: "https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg",
      text: "Enjoy the sweet and juicy taste of our fresh grapes. Perfect for a healthy snack or adding flavor to your dishes!"
    },
    {
      title: "Grapes Delight",
      image: "https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg",
      text: "Enjoy the sweet and juicy taste of our fresh grapes. Perfect for a healthy snack or adding flavor to your dishes!"
    },
    {
      title: "Chinatown Adventure",
      image: "https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg",
      text: "Discover the vibrant colors and unique culture of Chinatown. A place where tradition meets modernity!"
    },
    {
      title: "Grapes Delight",
      image: "https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg",
      text: "Enjoy the sweet and juicy taste of our fresh grapes. Perfect for a healthy snack or adding flavor to your dishes!"
    },
    {
      title: "Grapes Delight",
      image: "https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg",
      text: "Enjoy the sweet and juicy taste of our fresh grapes. Perfect for a healthy snack or adding flavor to your dishes!"
    },
    {
      title: "Chinatown Adventure",
      image: "https://cdn.pixabay.com/photo/2018/12/16/09/37/red-grapes-3878187__480.jpg",
      text: "Discover the vibrant colors and unique culture of Chinatown. A place where tradition meets modernity!"
    },
  ];

  return (
    <MDBContainer >
      <MDBRow>
        {cardsData.map((card, index) => (
          <MDBCol md="4" key={index}>
            <MDBCard className="">
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
