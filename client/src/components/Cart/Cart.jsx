import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { numRanks } from '../../helpers/functions.js';
import CartItems from '../CartItems/CartItems.jsx';
import { makeOrderAC } from '../../redux/actionCreators/cartAC';

import style from './Cart.module.css';

function Cart() {

  const carts = useSelector(state => state.cartReducer.cart);
  const { userId } = useSelector(state => state.userReducer);
  const makeOrder = useSelector(state => state.cartReducer.makeOrder);
  const { totalPrice } = useSelector(state => state.cartReducer);
  const history = useHistory();
  const dispatch = useDispatch();


  return (
    <div className={style.cart_box}>
      {
        carts.length
          ? carts.map((cart) => <CartItems key={cart.id} cart={cart} />)
          : "Вы ничего не добавили в корзину"
      }
      <div className={makeOrder ? style.visible : style.hidden} >
        <h3>Итого к оплате: {numRanks(totalPrice)} ₽</h3>
        <button onClick={() => {
          dispatch(makeOrderAC({ carts, userId }));
          history.push('/');
        }}>Оформить заказ</button>
      </div>
    </div>
  );
}

export default Cart;
