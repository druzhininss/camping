import React from "react";
import slide1 from "../../assets/DSCF2406.jpg";
import slide2 from "../../assets/DSCF2407w.jpg";
import slide3 from "../../assets/DSCF2415.jpg";
import slide4 from "../../assets/DSCF2417w.jpg";

const listPhoto = [slide1, slide2, slide3, slide4];

const ProductPageSlider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel carousel-dark slide col-md-5"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-inner">
        {listPhoto.map((photo) => (
          <div className="carousel-item active" key={photo}>
            <img src={photo} className="d-block w-100" alt="..." />
          </div>
        ))}
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
