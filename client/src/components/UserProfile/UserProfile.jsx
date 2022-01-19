import React from 'react';
import OrderList from '../../assets/list.png';

function UserProfile() {
  return (
    <>
      <h1>Мои заказы <img src={OrderList}/></h1>
      <div> 
        <p>Заказ в ожидании</p>
        <p></p>
      </div>
    </>
  );
}

export default UserProfile;
