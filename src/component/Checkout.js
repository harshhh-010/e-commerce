import React from 'react';
import Cart from './cart';
import { Container, Button } from 'react-bootstrap';

const Checkout = () => {
  return (
    <Container className="my-5">
      <h2>Checkout</h2>
      <Cart />
      <Button variant="success" className="mt-3">Proceed to Payment</Button>
    </Container>
  );
};

export default Checkout;
