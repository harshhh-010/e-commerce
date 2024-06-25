import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <div className='left'>
              <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav>
            </div>
            <div className='right'>
              <Nav.Link as={Link} to="/checkout">
              <FontAwesomeIcon className='cart-icon' icon={faCartShopping} /> {totalQuantity > 0 && <Badge bg="secondary">{totalQuantity}</Badge>}
              </Nav.Link>
            </div>
              
            
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
