import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartActions';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Product-card.css';
import image from './first.jpg'



const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

    return (
        <div className="container col-3">
            <div className="row">
                <div className="products">
                    <div onClick={handleProductClick}>
                        <Card className=" product-box">
                            <Card.Img className='product-img' variant="top" src={image} />
                            <Card.Body>
                                <div className='product-disc'>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text> 
                                </div>
                                    <Card.Text className='price'>${product.price}</Card.Text>
                                <div className="buttons-style">
                                    <Button className="cart" onClick={handleAddToCart}>Add To Cart</Button>
                                    <Button className="buy" onClick={handleAddToCart}>Buy Now</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
