import React from 'react';
import { product } from '../data/product';

const Image = () => {
  return (
     <div className="d-flex justify-content-center align-items-center">
    <img src={product.image}   alt={product.name} className="w-50 img-fluid" />
    </div>
  );
};
export default Image;