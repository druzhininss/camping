import React from "react";
import slide1 from "../../assets/DSCF2406.jpg";
import slide2 from "../../assets/DSCF2407w.jpg";
import slide3 from "../../assets/DSCF2415.jpg";
import slide4 from "../../assets/DSCF2417w.jpg";

const ProductPageCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={null}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-10" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-10" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-10" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-10" alt="..." />
        </div>
      </div>
    </div> 
  );
};

export default ProductPageCarousel;
