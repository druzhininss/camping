import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPageSlider = () => {
  const pathToPicture = '../../assets/picturesForProject';
  const { listProducts } = useSelector((state) => state.productsReducers); // TODO: change reducer name

  const { productId } = useParams();
  const product = listProducts?.find(
    (product) => product.product_id === +productId
  );
  // console.log(product);
  const listPhoto = [`${pathToPicture}${product.product_img_path}`];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div style={{ maxWidth: 700, height: 468, margin: "auto" }}>
      <Slider {...settings}>
        {listPhoto.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt="slider pictures" />
          </div>
        ))}
      </Slider>

      {/* <img src="/img/home.jpeg" alt='alt img'/> */}
    </div>
  );
};

export default ProductPageSlider;
