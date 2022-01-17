import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initProductsAC } from '../../redux/actionCreators/productsAC';
import ProductsProductList from '../ProductsProductList/ProductsProductList.jsx';
import ProductsCatalog from '../ProductsCatalog/ProductsCatalog.jsx'

function Products() {
  const dispatch = useDispatch();
  const listProduct = [
    {
      id: 1, name: 'Палатка зимняя', description: 'Теплая', instruction: 'растели', price: 10, 
    },
    {
      id: 2, name: 'Палатка летняя', description: 'Тонкая', instruction: 'постели', price: 20, 
    },
    {
      id: 3, name: 'Палатка осеняя', description: 'Хорошая', instruction: 'установи', price: 30, 
    },
    {
      id: 4, name: 'Палатка всесезонка', description: 'Отличная', instruction: 'надуй', price: 40, 
    },
  ]

  useEffect(() => {
    dispatch(initProductsAC(listProduct))
  }, [dispatch])
  return (
    <>
      < ProductsProductList />
      <ProductsCatalog />
    </>
  );
}

export default Products;
