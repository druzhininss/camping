import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemsProductAC } from '../../redux/actionCreators/adminAC';
import { deleteItemsProductAC } from '../../redux/actionCreators/adminAC';

function AdminPanelProductItems(product) {
  const dispatch = useDispatch();
  const change = useSelector((state) => state.productsReducers.change);
  console.log(change);
  return (
    <div>
      <div>
        <p>{product.product.product_name}</p>
      </div>
      <div >
        <img style={{ maxWidth: 200, height: 200, margin: "auto" }} ></img>
      </div>
      <ul>
        <li>
          <img src=""></img>
          <span>{product.product.Вес}</span>
        </li>
        <li>
          <img src=""></img>
          {change ?  <input value="gjgj"></input> : <span>{product.product['Область применения']}</span>}
        </li>
        <li>
          <img src=""></img>
          <span>{product.product.Цена}</span>
        </li>
      </ul>
      <button onClick={() => dispatch(changeItemsProductAC(product.product.product_id))}>Изменить</button>
      <button onClick={() => dispatch(deleteItemsProductAC(product.product.product_id))}>Удалить</button>
    </div>
  );
}

export default AdminPanelProductItems;
