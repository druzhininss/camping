/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProductsAC, increaseProductsAC, deleteProductsAC } from '../../redux/actionCreators/cartAC';
import style from './CartItems.module.css'

function CartItems({ cart }) {
  
  const dispatch = useDispatch();
  console.log(cart.price)
  console.log(typeof cart.price)
  return (
    <div>
      <div>
        <div className={style.cartCard}>
          <p className={style.cartP}>Название: {cart.name}</p>
          <p className={style.cartP}>Бренд: {cart.brand}</p>
          <p className={style.cartP}>Цвет: {cart.color}</p>
          <p className={style.cartP}>Цена товара: {cart.price}₽</p>
          <p className={style.cartP}>{cart.totalForItem}₽</p>
          <div className={style.btn}>
            <button onClick={() => dispatch(decreaseProductsAC({ price: cart.price, id: cart.id }))}>-</button>
            <p className={style.cartP}>{cart.quantity}</p>
            <button onClick={() => dispatch(increaseProductsAC({ price: +cart.price, id: cart.id }))}>+</button>
          </div>
          <div>
            <button className={style.button} onClick={() => dispatch(deleteProductsAC({ id: cart.id, price: cart.totalForItem }))}>Удалить товар</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
