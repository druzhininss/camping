import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';
import style from './ProductsProductList.module.css';
import { sortPriceProductsAC } from '../../redux/actionCreators/productsAC';

function ProductsProductList() {
  const products = useSelector((state) => state.productsReducers.listProducts);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <select className={style.sort_select} onChange={(event) => dispatch(sortPriceProductsAC(event.target.value))}>
          <option value="min" >Повозрастанию</option>
          <option value="max" >По убыванию</option>
        </select>
      </div>
      <div>
        <ul>
          {products.length ? products.map((product) => <ProductsProductItems
            key={product.id} product={product} />) : <li>None!</li>
          }
          )
        </ul>
      </div>
    </>
  );
}

export default ProductsProductList;
