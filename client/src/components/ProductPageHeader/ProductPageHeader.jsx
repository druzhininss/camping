import React from "react";

const ProductPageHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center ms-3 me-3">
      <div>Заголовок</div> {/* сюда тянем название товара */}
      <div>Цена: 12 499 руб.</div> {/* сюда тянем цену */}
      <div>
        {/* <button>Купить</button> */} {/* раскомментировать после пула */}
      </div>
    </div>
  );
};

export default ProductPageHeader;
