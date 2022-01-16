import React from 'react';

const ProductPageHeader = () => {
  return (
    <div className='d-flex flex-row justify-content-between'>
      <div>Заголовок</div> {/* сюда тянем название товара */}
      <div>
        <div>Цена: 12 499 руб.</div> {/* сюда тянем цену */}
        <button>Купить</button>
      </div>
    </div>
  );
};

export default ProductPageHeader; 
