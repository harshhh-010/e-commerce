import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/CartActions';
import { Container, Table,Row, Col, Button, Form } from 'react-bootstrap';
import image from './first.jpg'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalValue = useSelector(state => state.cart.totalValue);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  return (
    <Container className="my-5">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td style={{ width: '20%' }}>
                  <img src={image}  style={{ width: '100%' }} />
                </td>
                <td style={{ width: '30%' }}>
                  <h4>{item.name}</h4>
                </td>
                <td style={{ width: '20%' }}>
                  <p>${(item.price)*(item.quantity)}</p>
                </td>
                <td style={{ width: '10%' }}>
                  <Form.Control
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </td>
                <td style={{ width: '20%' }}>
                  <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row className="cart-total mt-4">
          <Col md={{ span: 3, offset: 9 }}>
            <h4>Total Value: ${totalValue.toFixed(2)}</h4>
          </Col>
        </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
