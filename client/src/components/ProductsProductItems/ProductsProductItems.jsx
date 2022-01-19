/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { cartProductsAC } from '../../redux/actionCreators/cartAC';
import { numRanks } from '../../helpers/functions';
import style from './ProductsProductItems.module.css';
import slide from "../../assets/DSCF2406.jpg";

function ProductsProductItems({ product }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryName } = useParams();
  const { login } = useSelector(state => state.userReducer);

  const addProductInCart = () => {
    return {
      id: product.product_id,
      name: product.product_name,
      brand: product['Бренд'],
      color: product['Цвет'],
      price: product['Цена'],
      quantity: 1,
      totalForItem: product['Цена'],
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
              <span>{numRanks(product.Цена)}</span>
            </li>
          </ul>
        </div>
      </div>

      {login
        ?
        <button className={style.button} onClick={() => dispatch(cartProductsAC(addProductInCart()))}>Купить</button>
        :
        <p style={{ color: '#ff00f1', fontSize: '0.8rem' }}>Покупка доступна только для авторизованных пользователей</p>
      }
      
    </div>
  );
}

export default ProductsProductItems;
