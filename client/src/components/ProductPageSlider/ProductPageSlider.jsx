import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/DSCF2406.jpg";
import slide2 from "../../assets/DSCF2407w.jpg";
import slide3 from "../../assets/DSCF2415.jpg";
import slide4 from "../../assets/DSCF2417w.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const listPhoto = [slide1, slide2, slide3, slide4];

const ProductPageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div style={{ maxWidth: 1260, margin: "auto" }}>
      <Slider {...settings}>
        {listPhoto.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt='true'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductPageSlider;
