import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import ProductPageCarousel from "../ProductPageCarousel/ProductPageCarousel";
import ProductPageHeader from "../ProductPageHeader/ProductPageHeader";
import ProductPageInfo from "../ProductPageInfo/ProductPageInfo";
import ProductPageSlider from "../ProductPageSlider/ProductPageSlider";
import style from './ProductPage.module.css';

const ProductPage = () => {
  const { listProducts } = useSelector((state) => state.productsReducers); // TODO: change reducer name
  const { productId } = useParams();
  const product = listProducts?.find(
    (product) => product.product_id === +productId
  );
  return (
    <div>
      <div>
        <ProductPageHeader />
      </div>
      <div className={style.product}>
      <div>
        <ProductPageSlider />
        {/* <ProductPageCarousel /> */}
      </div>
      <div>
        <ProductPageInfo />
      </div>
      </div>
      <div>
        <h2>Описание</h2>
        <div>{product['Описание']}</div>
      </div>
    </div>
  );
};

export default ProductPage;
