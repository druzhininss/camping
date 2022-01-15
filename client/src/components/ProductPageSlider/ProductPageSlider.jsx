import React from "react";
import slide1 from "../../assets/DSCF2406.jpg";
import slide2 from "../../assets/DSCF2407w.jpg";
import slide3 from "../../assets/DSCF2415.jpg";
import slide4 from "../../assets/DSCF2417w.jpg";

const ProductPageSlider = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
      data-bs-interval={null}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slide1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={slide2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={slide3} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={slide4} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductPageSlider;
