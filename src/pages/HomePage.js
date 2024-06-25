import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../component/ProductCard';


const HomePage = () => {
  const products = useSelector(state => state.products.products);

  return (
    <div className='home-page'>
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default HomePage;
