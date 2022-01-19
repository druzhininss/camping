import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminPanelProductItems from '../AdminPanelProductItems/AdminPanelProductItems';
import { getAllProductsAC } from '../../redux/actionCreators/adminAC';

function AdminPanelProductsList() {

  const allProducts = useSelector((state) => state.productsReducers.listProductsAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAC());
  }, []);


  return (
    <div>
      <p>ТУТ БУДУТ ВСЕ ПРОДУКТЫ ДЛЯ ИЗМЕНЕНИЯ И ДОБАВЛЕНИЯ</p>
      <div>
        <ul>
          {allProducts.length > 0 ? allProducts.map((product) => <AdminPanelProductItems key={product.product_id} product={product}
          />) : <li>Заказов нет!</li>
          }
          )
        </ul>
      </div>
    </div>
  );
}

export default AdminPanelProductsList;
