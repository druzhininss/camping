import React from "react";
import { useState } from "react";

const ProductPageSelector = () => {
  const classes = ["list-group-item active"];
  console.log(classes);

  const [isActive, isSetActive] = useState(false);

  const handleClick = () => {
    classes.push(" active");
    console.log(classes);

    isSetActive(true);
  };

  return (
    <ul className="list-group d-flex flex-row">
      {isActive ? (
        <li
          className={classes.join(" ")}
          aria-current="true"
          onClick={handleClick}
        >
          Фото
        </li>
      ) : (
        <li className={classes} onClick={handleClick}>
          Фото
        </li>
      )}

      {/* <li className={classes} onClick={handleClick}>
          Описание
        </li> */}

      {/* <li className="list-group-item">Преимущества</li>
        <li className="list-group-item">Схема</li>
        <li className="list-group-item">Отзывы</li> */}
    </ul>
  );
};

export default ProductPageSelector;
