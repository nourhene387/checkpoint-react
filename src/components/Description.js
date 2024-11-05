import React from 'react';
import { product } from '../data/product';

const Description = () => {
  return (
    <p className="text-gray-600 my-4">
      {product.description}
    </p>
  );
};
export default  Description