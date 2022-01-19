import React from 'react';
import { useSelector } from 'react-redux';
import { numRanks } from '../../helpers/functions.js';
import CartItems from '../CartItems/CartItems.jsx';
import style from './Cart.module.css';

function Cart() {
  
  const carts = useSelector(state => state.cartReducer.cart);
  const makeOrder = useSelector(state => state.cartReducer.makeOrder);
  const stats = useSelector(state => state.cartReducer.stats);
  
  return (
    <div>
      {
        carts.length 
        ? carts.map((cart) => <CartItems key={cart.id} cart={cart} />)
        : "Вы ничего не добавили в корзину"
      }
      <div className={makeOrder ? style.visible : style.hidden} >
          <h3>Итого к оплате: {numRanks(stats.totalPrice)}</h3>
          <button className={style.button}>Оформить заказ</button>
        </div>
    </div>
  );
}

export default Cart;
