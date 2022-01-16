import React from "react";
import slide1 from "../../assets/DSCF2406.jpg";
import slide2 from "../../assets/DSCF2407w.jpg";
import slide3 from "../../assets/DSCF2415.jpg";
import slide4 from "../../assets/DSCF2417w.jpg";

const ProductPageSlider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-dark"
      data-bs-ride="carousel"
      data-bs-interval={null}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductPageSlider;
