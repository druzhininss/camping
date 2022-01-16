/* eslint-disable react/prop-types */
import React from 'react';
import style from './ProductsProductItems.module.css'

function ProductsProductItems({ product }) {
  return (
    <div className={style.items_card}>
      <p>{product.name}</p>
      <p>{product.two}</p>
      <p>{product.three}</p>
      <p>{product.price}</p>
      <button >Купить</button> 
    </div>
  );
}

export default ProductsProductItems;
