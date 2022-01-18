import React from 'react';
import { useSelector } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';

function  AdminPanelOrders() {
  const cartProduct = useSelector((state) => state.productsReducerAdmin.listProductsAll);
  
  console.log(cartProduct);
  return (
    <div>
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

export default  AdminPanelOrders;