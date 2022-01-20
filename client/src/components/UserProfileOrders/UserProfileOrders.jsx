/* eslint-disable react/prop-types */
import React from 'react';
// import { useSelector } from 'react-redux';

function UserProfileOrders({ order }) {
  const pathToPicture = "/img/picturesForProject";
  // Вывод данных для админа и юзера
  //  const { isAdmin } = useSelector((state) => state.productsReducers);

  return (
    <div className="card mb-3" >
      <div className="row no-gutters">

        <div className="col-md-4">
          <img src={`${pathToPicture}${order.imagePath}`} classNameName="card-img" alt="some image" style={{ maxWidth: "600px", height: "200px", margin: "auto", paddingLeft: "20px" }} />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Наименование товара:  <b>{order.productName}</b></h5>
            <form action="" method="POST">
              <div className="form-row">
                <div className="col">
                  <span className="form-control">Количество: <b>{order.quantity}</b></span>
                  {/* <span className="form-control">Цена: <b> {order.price}&#8381;</b></span> */}
                </div>
                <div className="col">
                  <span className="form-control">Дата оформления: <b>{order.date}</b></span>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserProfileOrders;



{/* <div>
      <div> 
          <div>
            <p>{order.productName}</p>
          </div>
          <div >
            <img style={{ maxWidth: 200, height: 200, margin: "auto" }} src={`${pathToPicture}${order.imagePath}`}></img>
          </div>
          <ul>
            <li>
              <span>{order.quantity}</span>
            </li>
            <li>
              <span>{order.date}</span>
            </li>
          </ul>
        </div>
    </div> */}
