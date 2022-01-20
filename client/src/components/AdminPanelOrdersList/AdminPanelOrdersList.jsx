import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserProfileOrders from '../UserProfileOrders/UserProfileOrders.jsx';
import { getOrdersProductsAC } from '../../redux/actionCreators/adminAC';

function AdminPanelOrdersList() {
  const dispatch = useDispatch();
  //const cartOrders = useSelector((state) => state.productsReducer.listProductsAll);
  const cardOrders = [
    { id: 1, productName: "Заказ1", quantity: 2, order: 55 },
    { id: 2, productName: "Заказ2", quantity: 5, order: 245 },
    { id: 3, productName: "Заказ3", quantity: 100 , order: 345 },
  ]
  useEffect(() => {
    dispatch(getOrdersProductsAC());
  }, [])
  console.log(cardOrders);
  return (
    <>
      {<div>
        <ul>
          {cardOrders.length ? cardOrders.map((adminUser) => <UserProfileOrders // Компонент Дениса для карточка
            key={adminUser.id} order={adminUser} />) : <li>Заказов нет!</li>
          }
        </ul>
      </div>
      }
    </>
  );
}

export default AdminPanelOrdersList;
