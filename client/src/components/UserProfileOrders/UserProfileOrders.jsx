/* eslint-disable react/prop-types */
import React from 'react';

function UserProfileOrders({order}) {
  const pathToPicture = "/img/picturesForProject";

  return (
    <div>
      <div>
          <div>
            <p>{order.productName}</p>
          </div>
          <div >
            <img style={{ maxWidth: 200, height: 200, margin: "auto" }} src={`${pathToPicture}${order.imagePath}`}></img>
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
