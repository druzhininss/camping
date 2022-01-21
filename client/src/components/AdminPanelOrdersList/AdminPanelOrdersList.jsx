import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfileOrders from '../UserProfileOrders/UserProfileOrders.jsx';
import { getOrdersProductsAC } from '../../redux/actionCreators/adminAC';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function AdminPanelOrdersList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listProductsOrders } = useSelector((state) => state.productsReducers);
  const { userOrders } = listProductsOrders;
  const userOrderFlat = userOrders?.flat();

  useEffect(() => {
    dispatch(getOrdersProductsAC());
  }, [dispatch, getOrdersProductsAC])


  return (
    <>
      <p>Текущие заказы пользователей:</p>
      <button onClick={() => {
        history.goBack()
      }}>Назад</button>
      <div>
        {
          userOrderFlat?.length
            ?
            userOrderFlat.map((order) => {
              return <UserProfileOrders key={uuidv4()} order={order} />
            })
            :
            'Заказов нет!'
        }
      </div>

    </>
  );
}

export default AdminPanelOrdersList;
