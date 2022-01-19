import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';
import { getAllProductsAC } from '../../redux/actionCreators/adminAC';

function  AdminPanelProductsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAC())
  }, [dispatch]);

  return (
    <div>
      <p>ТУТ БУДУТ ВСЕ ПРОДУКТЫ ДЛЯ ИЗМЕНЕНИЯ И ДОБАВЛЕНИЯ</p>
      <div>
        <ul>
          {cartProduct.length ? cartProduct.map((product) => <ProductsProductItems // Тут я использую тот же компонет что и с карточкой в общих товарах
            key={product.product_id} product={product} />) : <li>Заказов нет!</li>
          }
          )
        </ul>
      </div>
    </div>
  );
}

export default  AdminPanelProductsList;
