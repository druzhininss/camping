import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';
import { getOrdersProductsAC } from '../../redux/actionCreators/adminAC';

function AdminPanelOrdersList() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.productsReducerAdmin.listProductsAll);

  useEffect(() => {
    dispatch(getOrdersProductsAC());
  }, [])

  return (
    <div>
      { <div>
        <ul>
          {cartProduct.length ? cartProduct.map((product) => <ProductsProductItems // Компонент Дениса для карточик
            key={product.id} product={product} />) : <li>Заказов нет!</li>
          }
        </ul>
      </div> }
    </div>
  );
}

export default AdminPanelOrdersList;
