import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/DSCF2406.jpg";
import slide2 from "../../assets/DSCF2407w.jpg";
import slide3 from "../../assets/DSCF2415.jpg";
import slide4 from "../../assets/DSCF2417w.jpg";

const listPhoto = [slide1, slide2, slide3, slide4];

const ProductPageCarousel = () => {
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
