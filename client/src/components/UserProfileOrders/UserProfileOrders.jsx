/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initOrdersInProfileAC } from '../../redux/actionCreators/profileAC';

function UserProfileOrders({order}) {

  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(initOrdersInProfileAC({userId}));
  }, [dispatch])

  return (
    <div>
      <div>
          <div>
            <p>{order.productName}</p>
          </div>
          <div >
            <img style={{ maxWidth: 200, height: 200, margin: "auto" }} src={order.imagePath}></img>
          </div>
          <ul>
            <li>
              <span>{order.quantity}</span>
            </li>
            <li>
              <span>{order.date}</span>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default UserProfileOrders;
