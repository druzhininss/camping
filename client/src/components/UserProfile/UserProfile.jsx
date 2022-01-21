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
  const { userOrder } = orders;
  const { userName } = orders;

  useEffect(() => {
    dispatch(initOrdersInProfileAC({ userId }));
  }, [dispatch, initOrdersInProfileAC])

  const userOrderFlat = userOrder?.flat()

  return (
    <>
      <h1>Здравствуйте, {userName}! <br />
        Здесь вы можете посмотреть ваши заказы <img src={OrderList} /></h1>
      <div>

        {
          userOrderFlat?.length
            ?
            userOrderFlat.map((order) => {
              return <UserProfileOrders key={uuidv4()} order={order} />
            })
            :
            'Вы ещё ничего не купили'
        }

      </div>
    </>
  );
}

export default UserProfile;
