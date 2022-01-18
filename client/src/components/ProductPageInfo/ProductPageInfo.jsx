/* eslint-disable react/prop-types */
import React from "react";

export default function ProductPageInfo({ product }) {
  const arrPropertiesPairs = Object.entries(product);
  const arrInfoValid = arrPropertiesPairs.slice(4);
  return (
    <table className={"table table-dark table-hover"}>
      <tbody>
        <tr>
          <td>Наименование</td>
          <td>{product.product_name}</td>
        </tr>
        {arrInfoValid.map((properties, index) =>
          properties[0].includes("Описание") ? null : (
            <tr key={index}>
              <td>{properties[0]}</td>
              <td>{properties[1]}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
