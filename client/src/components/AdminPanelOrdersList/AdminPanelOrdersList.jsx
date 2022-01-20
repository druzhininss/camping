import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';
import { getOrderProductsAC } from '../../redux/actionCreators/adminAC';

function AdminPanelOrdersList() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.productsReducerAdmin.listProductsAll);

  useEffect(() => {
    dispatch(getOrderProductsAC());
  }, [])

  return (
    <div>
      <div>
        <ul>
          {cartProduct.length ? cartProduct.map((product) => <ProductsProductItems // Тут я использую тот же компонет что и с карточкой в общих товарах
            key={product.id} product={product} />) : <li>Заказов нет!</li>
          }
        </ul>
      </div>
    </div>
  );
}

export default AdminPanelOrdersList;
