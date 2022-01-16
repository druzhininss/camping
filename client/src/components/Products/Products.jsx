import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initProductsAC } from '../../redux/actionCreators/productsAC';
import ProductsProductList from '../ProductsProductList/ProductsProductList.jsx';
import ProductsCatalog from '../ProductsCatalog/ProductsCatalog.jsx'

function Products() {
  const dispatch = useDispatch();
  const listProduct = [
    {
      id: 1, name: 'Название', two: 'Описание', three: 'Инструкция', price: 10,
    },
    {
      id: 2, name: 'Название2', two: 'Описание2', three: 'Инструкция2', price: 80,
    },
    {
      id: 3, name: 'Название3', two: 'Описание3', three: 'Инструкция3', price: 60,
    },
    {
      id: 4, name: 'Название4', two: 'Описание4', three: 'Инструкция4', price: 40,
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
