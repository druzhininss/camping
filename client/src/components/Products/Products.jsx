import React, { useEffect } from 'react';
import ProductsProductList from '../ProductsProductList/ProductsProductList.jsx';
import { useDispatch } from 'react-redux';
import { initProductsAC } from '../../redux/actionCreators/productsAC'

function Products() {
  const dispatch = useDispatch();
  const listProduct = [
    {
      id: 1, name: 'Название', two: 'Описание', three: 'Инструкция',
    },
    {
      id: 2, name: 'Название2', two: 'Описание2', three: 'Инструкция2',
    },
    {
      id: 3, name: 'Название3', two: 'Описание3', three: 'Инструкция3',
    },
    {
      id: 4, name: 'Название4', two: 'Описание4', three: 'Инструкция4',
    },
  ]

  useEffect(() => {
    dispatch(initProductsAC(listProduct))
  }, [dispatch])
  return (
    < ProductsProductList />
  );
}

export default Products;
