import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../../assets/list.png';
import { initOrdersInProfileAC } from '../../redux/actionCreators/profileAC';
import UserProfileOrders from '../UserProfileOrders/UserProfileOrders.jsx';
import { v4 as uuidv4 } from 'uuid';

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
          userOrder?.length
          ?
          userOrder.map((array) => {
            let thisOrder
            array.forEach((order) => {
              thisOrder = order
            });
            return <UserProfileOrders key={uuidv4()} order={thisOrder} />
          })
          :
          'Вы ещё ничего не купили'
        }

      </div>
    </>
  );
}

export default UserProfile;
