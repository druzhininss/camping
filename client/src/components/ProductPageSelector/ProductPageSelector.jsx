import React from "react";
import { useState } from "react";

const ProductPageSelector = () => {
  const listSelectors = ["Фото", "Описание", "Преимущества", "Схема", "Отзывы"];
  const classes = ["list-group-item list-group-item-action"];
  const [isActive, isSetActive] = useState(false);

  const handleClick = () => {
    classes.push(" active");
    isSetActive(true);
  };

  return (
    <ul className="list-group d-flex flex-row">
      {isActive
        ? listSelectors.map((link) => (
            <li
              className={classes.join(", ")}
              aria-current="true"
              onClick={handleClick}
              key={link}
            >
              {link}
            </li>
          ))
        : listSelectors.map((link) => (
            <li className={classes} key={link}>
              {link}
            </li>
          ))}
    </ul>
  );
};

export default ProductPageSelector;
