import React from 'react';

function ProductsProductItems({ product }) {
  return (
    <div>
      <li>{product.name}</li>
      <li>{product.two}</li>
      <li>{product.three}</li>
    </div>
  );
}

export default ProductsProductItems;
