import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeItemsProductAC } from '../../redux/actionCreators/adminAC';
import { deleteItemsProductAC } from '../../redux/actionCreators/adminAC';
import { saveChangeItemsProductAC } from '../../redux/actionCreators/adminAC';

const classes = ['mt-3 pe-3 ps-3 d-flex flex-column border border-5 rounded-2 bg-light shadow']

function AdminPanelProductItems(product) {
  const dispatch = useDispatch();
  const { change } = product.product;

  const weight = useRef();
  const use = useRef();
  const price = useRef();

  function changeItemsProduct() {
    return {
      id: product.product.product_id,
      weight: weight.current.value,
      use: use.current.value,
      price: price.current.value,
    }
  }
  return (
    <div className={classes}>
      <div>
        <p>{product.product.product_name}</p>
      </div>
      <div >
        <img></img>
      </div>
      <ul>
        <li>
          <img src=""></img>
          {change ? <input type="text" ref={weight} placeholder="Вес"></input> : <span>Вес: {product.product.Вес}</span>}
        </li>
        <li>
          <img src=""></img>
          {change ? <input type="text" ref={use} placeholder="Область применения"></input> : <span>Категория: {product.product['Область применения']}</span>}
        </li>
        <li>
          <img src=""></img>
          {change ? <input type="text" ref={price} placeholder="Цена"></input> : <span>Стоимость: {product.product.Цена}</span>}
        </li>
      </ul>
      {change ?
        <button onClick={() => dispatch(saveChangeItemsProductAC(changeItemsProduct()))}>Сохранить</button> :
        <div>
          <button className='btn btn-success' onClick={() => dispatch(changeItemsProductAC(product.product.product_id))}>Изменить</button>
          <button className='btn btn-warning ms-1' onClick={() => dispatch(deleteItemsProductAC(product.product.product_id))}>Удалить</button>
        </div>
      }
    </div>
  );
}

export default AdminPanelProductItems;
