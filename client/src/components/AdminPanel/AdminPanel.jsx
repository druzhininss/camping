import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminPanelLogin from "../AdminPanelLogin/AdminPanelLogin.jsx";
import { adminLogoutAC } from "../../redux/actionCreators/adminLogoutAC";
import style from "./AdminPanel.module.css";

function AdminPanel() {
  const { isAdmin } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {!isAdmin ? (
        <div>
          <AdminPanelLogin />{" "}
          {/*когда будет готов isAdmin то этот див с компонетом поменять местами с кнопками */}
        </div>
      ) : (
        <div className={style.container}>
          <div className="d-flex justify-content-around mb-5">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin/orders"
            >
              <button className="btn btn-success btn-lg">Заказы</button>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin/products"
            >
              <button className="btn btn-success btn-lg">Товары</button>
            </Link>
          </div>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/"
            onClick={() => dispatch(adminLogoutAC())}
          >
            <button className="btn btn-danger btn-sm">Выход</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
