import React from 'react';
import { Redirect } from "react-router-dom";
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
  const { orderDone } = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();


  return (
    <div>
      {
        carts.length
          ? carts.map((cart) => <CartItems key={cart.id} cart={cart} />)
          : "Вы ничего не добавили в корзину"
      }
      <div className={makeOrder ? style.visible : style.hidden} >
        <h3>Итого к оплате: {numRanks(totalPrice)}</h3>
        <button onClick={() => dispatch(makeOrderAC({ carts, userId }))}>Оформить заказ</button>
      </div>
      { 
      orderDone
      && <Redirect to='/' />
      }
    </div>
  );
}

export default Cart;
