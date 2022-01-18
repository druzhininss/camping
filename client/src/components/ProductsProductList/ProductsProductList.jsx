import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';
import { sortPriceProductsAC } from '../../redux/actionCreators/productsAC';
import style from './ProductsProductList.module.css';

function ProductsProductList() {
  const products = useSelector((state) => state.productsReducers.listProducts);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div>
      <div className={style.sort_div}>
        <select className={style.sort_select} onChange={(event) => dispatch(sortPriceProductsAC(event.target.value))}>
          <option value="min" >По возрастанию</option>
          <option value="max" >По убыванию</option>
        </select>
      </div>
      <div className={style.cards_div}>
          {products.length
            ?
            products.map((product) => {
              return <ProductsProductItems key={product.product_id} product={product} />
            })
            :
            <p>Товары отсутствуют</p>
          }
      </div>
    </div>
  );
}

export default ProductsProductList;
