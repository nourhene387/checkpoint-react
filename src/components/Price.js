import React from 'react';
import { product } from '../data/product';

const Price = () => {
  return (
    <div className="text-lg font-semibold text-green-600">
      {product.price} DT
    </div>
  );
};

export default Price;