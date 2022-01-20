import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initProductsAC } from '../../redux/actionCreators/productsAC';
import ProductsProductList from '../ProductsProductList/ProductsProductList.jsx';

function Products() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(initProductsAC(categoryName))
  }, [dispatch, categoryName]);
  return (
    <>
      <ProductsProductList />
    </>
  );
}

export default Products;
