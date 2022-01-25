import React from "react";
// import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPageSlider = () => {
  const { listProducts } = useSelector((state) => state.productsReducer);
  const { productId } = useParams();
  const pathToPicture = "/img/picturesForProject";

  const product = listProducts?.find(
    (product) => product.product_id === +productId
  );

  return (
    <div style={{ maxWidth: 700, height: 468, margin: "auto" }}>
      <img src={`${pathToPicture}${product.product_img_path}`} alt="picture" />
    </div>
  );
};

export default ProductPageSlider;
