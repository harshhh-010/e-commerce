import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartActions';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './ProductDetail.css';
import image from './first.jpg';


  const ProductDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(id))); 
  if (!product) {
    return <p>Product not found</p>; 
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Container className="product-detail-container my-5">
      <Row>
        <Col md={6}>
          <Image src={image} fluid className="product-image" />
        </Col>
        <Col md={6} className="product-details">
          <h3>{product.name}</h3>
          <p className="product-description">{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam aspernatur dignissimos perspiciatis eligendi incidunt itaque distinctio magni omnis voluptate, tenetur iste fugiat ab qui quasi necessitatibus minima est vitae!</p>
          <div className="price-section">
            <h4 className="product-price">${product.price}</h4> <p className='stock'>In-Stock: {product.stock}</p>
          </div>
          <Button className='addToCart' onClick={handleAddToCart}>Add to Cart</Button>
          <hr />
          <Row className="reviews-section mt-5">
            <Col>
              <h4 className='head'>Customer Reviews</h4>
              {product.reviews.length === 0 ? (
                <p>No reviews yet</p>
              ) : (
                product.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <h5 className='username'>{review.user}</h5>
                    <p className='rating'>Rating: {review.rating} / 5</p>
                    <p className='comments'>{review.comment} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae sapiente iste nam placeat explicabo, odit voluptatem voluptate quo tenetur quia, repellat soluta enim quod quam similique asperiores consectetur nulla. </p>
                  </div>
                ))
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
