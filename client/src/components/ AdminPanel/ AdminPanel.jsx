import React from 'react';
import { useSelector } from 'react-redux';
import AdminPanelLogin from '../ AdminPanelLogin/AdminPanelLogin.jsx';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';

function  AdminPanel() {
  const cartProduct = useSelector((state) => state.cartReducer.cart);
  
  return (
    <div>
      <AdminPanelLogin />
      <div>
        <ul>
          {cartProduct.length ? cartProduct.map((product) => <ProductsProductItems // Тут я использую тот же компонет что и с карточкой в общих товарах
            key={product.id} product={product} />) : <li>Заказов нет!</li>
          }
          )
        </ul>
      </div>
    </div>
  );
}

export default  AdminPanel;
