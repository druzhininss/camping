import React from 'react';
import { useDispatch } from 'react-redux';
import { cartProductsAC } from '../../redux/actionCreators/cartAC';
import style from './ProductsProductItems.module.css'

function ProductsProductItems({ product }) {

  const dispatch = useDispatch();
  const addProductInCart = () => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      instruction: product.instruction,
      price: product.price,
    }
  }
  return (
    <div className={style.items_card}>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.instruction}</p>
      <p>{product.price}</p>
      <button onClick={() => dispatch(cartProductsAC(addProductInCart()))}>Купить</button> 
    </div>
  );
}

export default ProductsProductItems;
