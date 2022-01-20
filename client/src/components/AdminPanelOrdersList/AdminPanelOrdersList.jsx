import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';
import { getOrdersProductsAC } from '../../redux/actionCreators/adminAC';

function AdminPanelOrdersList() {
  const dispatch = useDispatch();
  //const cartOrder = useSelector((state) => state.productsReducer.listProductsAll);

  useEffect(() => {
    dispatch(getOrdersProductsAC(1));
  }, [])

  return (
    <div>
      {/* {<div>
        <ul>
          {cartOrder.length ? cartOrder.map((orderUser) => <ProductsProductItems // Компонент Дениса для карточик
            key={orderUser.id} orderUser={orderUser} />) : <li>Заказов нет!</li>
          }
        </ul>
      </div>} */}
    </div>
  );
}

export default AdminPanelOrdersList;
