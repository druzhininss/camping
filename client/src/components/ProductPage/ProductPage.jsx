import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductPageCarousel from "../ProductPageCarousel/ProductPageCarousel";
import ProductPageHeader from "../ProductPageHeader/ProductPageHeader";
import ProductPageInfo from "../ProductPageInfo/ProductPageInfo";
import ProductPageSelector from "../ProductPageSelector/ProductPageSelector";
import ProductPageSlider from "../ProductPageSlider/ProductPageSlider";

const ProductPage = () => {
  const { listProductsAll } = useSelector((state) => state.productsReducers); // TODO: change reducer name
  const { productId } = useParams();
  const product = listProductsAll?.find(
    (product) => product.product_id === +productId
  );
  return (
    <div>
      <div>
        <ProductPageHeader />
      </div>
      <div>
        <ProductPageSelector />
      </div>
      <div>
        <ProductPageSlider />
        <ProductPageCarousel />
      </div>
      <div>
        <ProductPageInfo />
      </div>
      <div>
        <h2>Описание</h2>
        <div>{product['Описание']}</div>
      </div>
    </div>
  );
};

export default ProductPage;
