import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductPageHeader = () => {
  const { listProductsAll } = useSelector((state) => state.productsReducers); // TODO: change reducer name
  const { productId } = useParams();
  const product = listProductsAll?.find(
    (product) => product.product_id === +productId
  );
  return (
    <div className="d-flex justify-content-between align-items-center ms-3 me-3">
      <div>{product.product_name}</div>
      <div>{product['Цена']} руб.</div>
    </div>
  );
};

export default ProductPageHeader;
