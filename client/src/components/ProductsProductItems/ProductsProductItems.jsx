/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { cartProductsAC } from '../../redux/actionCreators/cartAC';
import { numRanks } from '../../helpers/functions';
import style from './ProductsProductItems.module.css';
import  {numRanks}  from '../../helpers/functions';
import slide from "../../assets/DSCF2406.jpg";
import Scales from '../../assets/scales.png';
import Ruble from '../../assets/ruble.png';
import Tent from '../../assets/tent.png'
import Size from '../../assets/size.png'

function ProductsProductItems({ product }) {
console.log(product,'kkk');
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
              <img src={Tent}/>&nbsp;&nbsp;
              <span>{product['Область применения']}</span>
            </li>
            <li>
              <img src={Scales}/>&nbsp;&nbsp;
              <span>{product.Вес}</span>
            </li>
            <li>
              <img src={Size}/>&nbsp;&nbsp;
              <span>{product.Размер}</span>
            </li>
            <li>
              <img src={Ruble}/>&nbsp;&nbsp;

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
