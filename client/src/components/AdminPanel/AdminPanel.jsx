import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminPanelLogin from "../AdminPanelLogin/AdminPanelLogin.jsx";
import { adminLogoutAC } from "../../redux/actionCreators/adminLogoutAC";
import style from "./AdminPanel.module.css";

function AdminPanel() {
  const { isAdmin } = useSelector((state) => state.productsReducers);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      {!isAdmin ? (
        <div>
          <AdminPanelLogin />{" "}
          {/*когда будет готов isAdmin то этот див с компонетом поменять местами с кнопками */}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-around mb-5">
            <button className="btn btn-success btn-lg">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/orders"
              >
                Заказы
              </Link>
            </button>
            <button className="btn btn-success btn-lg">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/products"
              >
                Товары
              </Link>
            </button>
          </div>
          <button className="btn btn-danger btn-sm">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin/"
              onClick={() => dispatch(adminLogoutAC())}
            >
              Выход
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
