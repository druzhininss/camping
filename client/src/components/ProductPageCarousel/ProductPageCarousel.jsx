import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductPageCarousel = () => {
  const { listProducts } = useSelector((state) => state.productsReducer);
  const { productId } = useParams();
  const pathToPicture = "/img/picturesForProject";
  
  const product = listProducts?.find(
    (product) => product.product_id === +productId
  );

  const listPhoto = [
    `${pathToPicture}${product.product_img_path}`,
    `${pathToPicture}${product.product_img_path}`,
    `${pathToPicture}${product.product_img_path}`,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <Slider {...settings}>
        {listPhoto.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt="true" style={{width: 128, height: 86}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductPageCarousel;
