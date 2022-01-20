import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfileOrders from '../UserProfileOrders/UserProfileOrders.jsx';
import { getOrdersProductsAC } from '../../redux/actionCreators/adminAC';
import { v4 as uuidv4 } from 'uuid';

function AdminPanelOrdersList() {
  const dispatch = useDispatch();
  const { listProductsOrders } = useSelector((state) => state.productsReducers);
  const { userOrders }  = listProductsOrders;
  
  useEffect(() => {
    dispatch(getOrdersProductsAC());
  }, [dispatch, getOrdersProductsAC])

  return (
    <>
      <div>
          {
          userOrders?.length
          ? 
          userOrders.map((array) => {
            let thisOrder
            array.forEach((order) => {
              thisOrder = order
            });
            return <UserProfileOrders key={uuidv4()} order={thisOrder} />
          })
          : 
          'Заказов нет!'
          }
      </div>

    </>
  );
}

export default AdminPanelOrdersList;
