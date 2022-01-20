import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../../assets/list.png';
import { initOrdersInProfileAC } from '../../redux/actionCreators/profileAC';
import UserProfileOrders from '../UserProfileOrders/UserProfileOrders.jsx';

function UserProfile() {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.userReducer);
  const { orders } = useSelector(state => state.profileReducer);
  const { userOrder }  = orders;

  useEffect(() => {
    dispatch(initOrdersInProfileAC({ userId }));
  }, [dispatch, initOrdersInProfileAC])


  return (
    <>
      <h1>Мои заказы <img src={OrderList} /></h1>
      <div>

        {
          userOrder.length
          &&
          userOrder.map((array) => {
            let thisOrder
            array.forEach((order) => {
              thisOrder = order
            });
            return <UserProfileOrders key={thisOrder.id} order={thisOrder} />
          })
        }

      </div>
    </>
  );
}

export default UserProfile;
