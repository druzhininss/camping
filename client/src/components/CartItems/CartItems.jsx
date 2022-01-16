/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseProductsAC, increaseProductsAC } from '../../redux/actionCreators/cartAC';
import style from './CartItems.module.css'

function CartItems({cart}) {
  const currentQuantity = useSelector(state => state.cartReducer.currentItem)
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className={style.cartCard}>
          <p>Название: {cart.name}</p>
          <p>Описание: {cart.description}</p>
          <p>Инстурукция: {cart.instruction}</p>
          <p>Цена: {cart.price}</p>
          <div className={style.btn}>
          <button onClick={() => dispatch(decreaseProductsAC({price: cart.price, id: cart.id}))}>-</button>
          <p>{currentQuantity.quantity}</p>
          <button onClick={() => dispatch(increaseProductsAC({price: cart.price, id: cart.id}))}>+</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
