import React from 'react';
import { useDispatch } from 'react-redux';
import { changeItemsProduct } from '../../redux/actionCreators/adminAC';
import { deleteItemsProduct } from '../../redux/actionCreators/adminAC';

function AdminPanelProductItems(product) {
  const dispatch = useDispatch();

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
          <span>{product.product['Область применения']}</span>
        </li>
        <li>
          <img src=""></img>
          <span>{product.product.Цена}</span>
        </li>
      </ul>
      <button onClick={() => dispatch(changeItemsProduct())}>Изменить</button>
      <button onClick={() => dispatch(deleteItemsProduct())}>Удалить</button>
    </div>
  );
}

export default AdminPanelProductItems;
