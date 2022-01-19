import React from 'react';
import { useDispatch } from 'react-redux';
import { changeItemsProductAC } from '../../redux/actionCreators/adminAC';
import { deleteItemsProductAC } from '../../redux/actionCreators/adminAC';
import { saveChangeItemsProductAC } from '../../redux/actionCreators/cartAC';

function AdminPanelProductItems(product) {
  const dispatch = useDispatch();
  // const  change  = useSelector((state) => state.productsReducers.listProductsAll);
  const { change, product_id } = product.product
  console.log(change, product_id);

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
          {change ? <input type="text" placeholder="Вес"></input> : <span>{product.product.Вес}</span>}
        </li>
        <li>
          <img src=""></img>
          {change ? <input type="text" placeholder="Область применения"></input> : <span>{product.product['Область применения']}</span>}
        </li>
        <li>
          <img src=""></img>
          {change ? <input type="text" placeholder="Цена"></input> : <span>{product.product.Цена}</span>}
        </li>
      </ul>
      {change ?
        <button onClick={() => dispatch(saveChangeItemsProductAC(product.product.product_id))}>Сохранить</button> :
        <div>
          <button onClick={() => dispatch(changeItemsProductAC(product.product.product_id))}>Изменить</button>
          <button onClick={() => dispatch(deleteItemsProductAC(product.product.product_id))}>Удалить</button>
        </div>
      }
    </div>
  );
}

export default AdminPanelProductItems;
