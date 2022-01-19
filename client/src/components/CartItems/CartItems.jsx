/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProductsAC, increaseProductsAC, deleteProductsAC } from '../../redux/actionCreators/cartAC';
import style from './CartItems.module.css'

function CartItems({ cart }) {
  
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div className={style.cartCard}>
          <p>Название: {cart.name}</p>
          <p>Бренд: {cart.brand}</p>
          <p>Цвет: {cart.color}</p>
          <p>Цена товара: {cart.price}₽</p>
          <p>{cart.totalForItem}₽</p>
          <div className={style.btn}>
            <button onClick={() => dispatch(decreaseProductsAC({ price: cart.price, id: cart.id }))}>-</button>
            <p>{cart.quantity}</p>
            <button onClick={() => dispatch(increaseProductsAC({ price: +cart.price, id: cart.id }))}>+</button>
          </div>
          <div>
            <button onClick={() => dispatch(deleteProductsAC({ id: cart.id, price: cart.totalForItem }))}>Удалить товар</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
