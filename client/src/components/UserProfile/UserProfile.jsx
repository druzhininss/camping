import React from 'react';
import { useSelector } from 'react-redux';
import OrderList from '../../assets/list.png';
import UserProfileOrders from '../UserProfileOrders/UserProfileOrders.jsx';

function UserProfile() {
  const { orders } = useSelector(state => state.profileReducer);

  return (
    <>
      <h1>Мои заказы <img src={OrderList}/></h1>
      <div> 
        {
          orders.length 
          && orders.map((order) => {
            return <UserProfileOrders key={order.id} order={order} />
          })
        }
      </div>
    </>
  );
}

export default UserProfile;
