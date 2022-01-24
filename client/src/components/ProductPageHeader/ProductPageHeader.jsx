import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { numRanks } from '../../helpers/functions'

const ProductPageHeader = () => {
  const { listProducts } = useSelector((state) => state.productsReducer);
  const { productId } = useParams();
  const history = useHistory();

  const product = listProducts?.find(
    (product) => product.product_id === +productId
  );
  return (
    <>
      <div className="d-flex justify-content-between align-items-center ms-3 me-3">
        <div>{product.product_name}</div>
        <div>{numRanks(product['Цена'])} руб.</div>
      </div>
      <input style={{backgroundColor: '#e7e7e7', width: '2rem', opacity: '30%'}} type="button" value="<" onClick={() => history.goBack()} />
    </>
  );
};

export default ProductPageHeader;
