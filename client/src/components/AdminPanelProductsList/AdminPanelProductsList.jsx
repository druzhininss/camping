import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import AdminPanelProductItems from '../AdminPanelProductItems/AdminPanelProductItems';
import { getAllProductsAC } from '../../redux/actionCreators/adminAC';
import classes from './AdminPanelProductsList.module.css';

function AdminPanelProductsList() {

  const allProducts = useSelector((state) => state.productsReducer.listProductsAll);
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
        <ul className={classes.container}>
          {allProducts.length > 0 ? allProducts.map((product) => <AdminPanelProductItems key={product.product_id} product={product}
          />) : <li>Товаров нет!</li>
          }
        </ul>
      </div>
    </div>
  );
}

export default AdminPanelProductsList;
