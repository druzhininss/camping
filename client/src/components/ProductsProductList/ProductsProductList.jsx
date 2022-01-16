import React from 'react';
import { useSelector } from 'react-redux';
import ProductsProductItems from '../ProductsProductItems/ProductsProductItems.jsx';

function ProductsProductList() {
  const products = useSelector((state) => state.productsReducers.listProducts);
  
  return (
    <ul>
      {products.length ? products.map((product) => <ProductsProductItems
      key={product.id} product={product}/>) : <li>None!</li>
      }
      )
    </ul>
  );
}

export default ProductsProductList;
