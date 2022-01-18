import React from 'react';
import { useSelector } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';

function  AdminPanelProductsList() {
  const cartProduct = useSelector((state) => state.productsReducerAdmin.listProductsAll);
  console.log(cartProduct);
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
