import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';


const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) + ' ' + date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const OrderTracking = () => {
  const orderSteps = [
    { title: 'Order Placed', time: '', status: 'Completed' },
    { title: 'Processing', time: '', status: 'In Progress' },
    { title: 'Shipped', time: '', status: 'In Progress' },
    { title: 'Out for Delivery', time: '', status: 'In Progress' },
    { title: 'Delivered', time: '', status: 'Completed' },
  ];

  const orderDetails = [
    { item: 'Product 1', quantity: 100, price: '$100.00' },
    { item: 'Product 2', quantity: 2, price: '$100.00' },
    { item: 'Product 3', quantity: 1, price: '$100.00' },
  ];

  const paymentDetails = {
    method: 'Credit Card',
    status: 'Paid',
    amount: '400.00',
  };

  const totalAmount = orderDetails.reduce((total, detail) => {
    const price = parseFloat(detail.price.replace('$', ''));
    return total + (price * detail.quantity);
  }, 0).toFixed(2);

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="12">
          <h3 className="text-center mb-4">Order Tracking</h3>

 {/*------------------------------- Order Steps --------------------------------*/}
          <div className="mb-4">
            <h4 className="mb-3">Order Steps</h4>
            <div className="d-flex flex-column align-items-start">
              {orderSteps.map((step, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-center mb-4 ${
                    index < orderSteps.length - 1 ? 'border-bottom' : ''
                  }`}
                >
                  <div
                    className={`d-flex justify-content-center align-items-center ${step.status === 'Completed' ? 'text-success' : 'text-primary'}`}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: step.status === 'Completed' ? 'green' : 'blue',
                    }}
                  >
                    <MDBIcon icon="check" />
                  </div>
                  <MDBCard className="ms-3 w-100">
                    <MDBCardBody>
                      <h5>{step.title}</h5>
                      <p>{formatDateTime(step.time)}</p>
                      <small>Status: {step.status}</small>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              ))}
            </div>
          </div>

{/*---------------------- Order Details ----------------------------*/}
          <div className="mb-4"> 
            <h4 className="mb-3">Order Details</h4>
            <MDBCard>
              <MDBCardBody>
                <MDBListGroup>
                  {orderDetails.map((detail, index) => (
                    <MDBListGroupItem key={index}> 
                      {detail.item} - Quantity: {detail.quantity} - Price: {detail.price}
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
                <MDBTypography tag="h5" className="mt-3">Total: $ {totalAmount}</MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </div>

 {/* --------------------- Payment Details ---------------------- */}
          <div>
            <h4 className="mb-3">Payment Details</h4>
            <MDBCard>
              <MDBCardBody>
                <MDBTypography tag="h5">Payment Method: {paymentDetails.method}</MDBTypography>
                <MDBTypography tag="h5">Payment Status: {paymentDetails.status}</MDBTypography>
                <MDBTypography tag="h5">Amount Paid: $ {totalAmount}</MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </div> 
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
   
export default OrderTracking;
