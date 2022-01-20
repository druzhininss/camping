import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import AdminPanelProductItems from '../AdminPanelProductItems/AdminPanelProductItems';
import { getAllProductsAC } from '../../redux/actionCreators/adminAC';

function AdminPanelProductsList() {

  const allProducts = useSelector((state) => state.productsReducers.listProductsAll);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllProductsAC());
  }, []);


  return (
    <div>
      <p>Список всех товаров на сайте:</p>
      <button onClick={() => {
        history.goBack()
      }}>Назад</button>
      <div>
        <ul>
          {allProducts.length > 0 ? allProducts.map((product) => <AdminPanelProductItems key={product.product_id} product={product}
          />) : <li>Заказов нет!</li>
          }
        </ul>
      </div>
    </div>
  );
}

export default AdminPanelProductsList;
