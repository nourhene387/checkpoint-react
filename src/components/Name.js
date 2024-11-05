import React from 'react';
import { product } from '../data/product';

const Name = () => {
  return (
    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
  );
};

export default Name;