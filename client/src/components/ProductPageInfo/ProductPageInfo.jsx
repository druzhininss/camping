import React from "react";

export default function ProductPageInfo() {
  return (
    <table className={"table table-dark table-hover"}>
      <tbody>
        <tr>
          <td>Вес</td>
          <td>{2.1}</td>
        </tr>
        <tr>
          <td>Размер</td>
          <td>{`(${198}x${76}x${7.5}см)`}</td>
        </tr>
        <tr>
          <td>Размер в чехле</td>
          <td>{`${80}x${18}см`}</td>
        </tr>
        <tr>
          <td>Наполнитель коврика</td>
          <td>{`Вспененный полиуретан ${16} кг/м3`}</td>
        </tr>
        <tr>
          <td>Материал верха</td>
          <td>{"Polyester 50D Stretch Laminated TPU"}</td>
        </tr>
        <tr>
          <td>Материал низа</td>
          <td>{"Polyester 75D Non-Slip Laminated TPU"}</td>
        </tr>
        <tr>
          <td>Область применения</td>
          <td>{"Кемпинг"}</td>
        </tr>
        <tr>
          <td>R-value</td>
          <td>{6.4}</td>
        </tr>
      </tbody>
    </table>
  );
}
