import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import slide1 from "../../assets/picturesForProject/tents/camping/Indiana 4.jpg";
import slide2 from "../../assets/picturesForProject/tents/camping/Indiana 4.jpg";
import slide3 from "../../assets/picturesForProject/tents/camping/Indiana 4.jpg";
import slide4 from "../../assets/picturesForProject/tents/camping/Indiana 4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const listPhoto = [slide1, slide2, slide3, slide4];

const ProductPageSlider = () => {
  const { listProducts } = useSelector((state) => state.productsReducers); // TODO: change reducer name
  const { productId } = useParams();
  const product = listProducts?.find(
    (product) => product.product_id === +productId
  );
  console.log(product.product_img_path);
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
            <img src={slide} alt="true" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductPageSlider;
