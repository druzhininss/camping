/* eslint-disable react/prop-types */
import React from 'react';
import style from './UserProfile.module.css';

function UserProfileOrders({ order }) {
  const pathToPicture = "/img/picturesForProject";

  return (
    <div>
      <div className={style.profileOrders}>
        <div>
          <p>Наименование товара:{order.productName}</p>
        </div>
        <div >
          <img style={{ maxWidth: 200, height: 200, margin: "auto" }} src={`${pathToPicture}${order.imagePath}`}></img>
        </div>
        <ul>
          <li>
            <span>Кол-во: {order.quantity}</span>
          </li>
          <li>
            <span>Дата-заказа: {order.date}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfileOrders;
