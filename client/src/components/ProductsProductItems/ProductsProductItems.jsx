/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { cartProductsAC } from '../../redux/actionCreators/cartAC';
import style from './ProductsProductItems.module.css';
import slide from "../../assets/DSCF2406.jpg";

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
        <div>
          <div>
            <p>{product.product_name}</p>
          </div>
          <div >
            <img style={{ maxWidth: 200, height: 200, margin: "auto" }} src={slide}></img>
          </div>
          <ul>
            <li>
              <img src=""></img>
              <span>{product.Вес}</span>
            </li>
            <li>
              <img src=""></img>
              <span>{product['Область применения']}</span>
            </li>
            <li>
              <img src=""></img>
              <span>{product.Цена}</span>
            </li>
          </ul>
        </div>
      </div>

      <button className={style.button} onClick={() => dispatch(cartProductsAC(addProductInCart()))}>Купить</button>
    </div>
  );
}

export default ProductsProductItems;
