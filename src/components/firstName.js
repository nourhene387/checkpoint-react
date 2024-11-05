import React from 'react';
import { product } from '../data/product';

const firstName = () => {
  return (
    <h2 className="text-xl font-bold mb-2">{product.firstName}</h2>
  );
};

export default firstName;