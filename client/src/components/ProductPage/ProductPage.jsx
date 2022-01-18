import React from "react";
import ProductPageCarousel from "../ProductPageCarousel/ProductPageCarousel";
import ProductPageHeader from "../ProductPageHeader/ProductPageHeader";
import ProductPageInfo from "../ProductPageInfo/ProductPageInfo";
import ProductPageSelector from "../ProductPageSelector/ProductPageSelector";
import ProductPageSlider from "../ProductPageSlider/ProductPageSlider";

const ProductPage = () => {
  return (
    <div>
      <div>
        <ProductPageHeader />
      </div>
      <div>
        <ProductPageSelector />
      </div>
      <div>
        <ProductPageSlider />
        <ProductPageCarousel />
      </div>
      <div>
        <ProductPageInfo />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fuga eos voluptatum soluta, similique et perferendis hic adipisci
          deserunt enim iure dignissimos placeat eveniet illo nemo temporibus
          voluptates odit veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fuga eos voluptatum soluta, similique et perferendis hic adipisci
          deserunt enim iure dignissimos placeat eveniet illo nemo temporibus
          voluptates odit veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fuga eos voluptatum soluta, similique et perferendis hic adipisci
          deserunt enim iure dignissimos placeat eveniet illo nemo temporibus
          voluptates odit veritatis.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
