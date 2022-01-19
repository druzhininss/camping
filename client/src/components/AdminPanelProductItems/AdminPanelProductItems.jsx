import React from 'react';

function AdminPanelProductItems(product) {
  console.log(product.product);
  return (
    <div>
      <div>
        <p>{product.product.product_name}</p>
      </div>
      <div >
        <img style={{ maxWidth: 200, height: 200, margin: "auto" }} ></img>
      </div>
      <ul>
        <li>
          <img src=""></img>
          <span>{product.product.Вес}</span>
        </li>
        <li>
          <img src=""></img>
          <span>{product.product['Область применения']}</span>
        </li>
        <li>
          <img src=""></img>
          <span>{product.product.Цена}</span>
        </li>
      </ul>
    </div>
  );
}

export default AdminPanelProductItems;
