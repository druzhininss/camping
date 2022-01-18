/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductPageInfo() {
  const { listProductsAll } = useSelector((state) => state.productsReducers); // TODO: change reducer name
  const { productId } = useParams();
  const product = listProductsAll?.find(
    (product) => product.product_id === +productId
  );
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
