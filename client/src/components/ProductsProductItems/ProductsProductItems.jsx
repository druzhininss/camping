/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { cartProductsAC } from '../../redux/actionCreators/cartAC';
import style from './ProductsProductItems.module.css'

function ProductsProductItems({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryName } = useParams();

  const addProductInCart = () => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      instruction: product.instruction,
      price: product.price,
      quantity: 1,
      totalForItem: product.price,
    }
  }

  return (
    <div className={style.items_card}>
      <div onClick={() => {
        history.push(`/products/${categoryName}/${product.product_id}`);
      }}>
      <p>{product.name}</p>
      <p>{product.product_img_path}</p>
      <p>{product.product_name}</p>
      <p>{product.Цена}</p>
      </div>
      
      <button className={style.button} onClick={() => dispatch(cartProductsAC(addProductInCart()))}>Купить</button> 
    </div>
  );
}

export default ProductsProductItems;
