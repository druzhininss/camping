import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import Logo from '../../assets/LogoCamping.png';
import Cart from '../../assets/cart.png'
import { userLogoutAC } from '../../redux/actionCreators/logoutAC';

function Nav() {
  const dispatch = useDispatch();

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand"><img className={style.logoImg} src={Logo} alt="logo" /></Link>
          <Link className="navbar-brand" to='/products/palatki'>Палатки</Link>
          <Link className="navbar-brand" to='/products/spalniki'>Спальники</Link>
          <Link className="navbar-brand" to='/products/kovriki'>Коврики</Link>

          <div className="navbar" id="navbarSupportedContent">
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to='/cart'><img className={style.cart} src={Cart} alt="logo" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/registration'>Регистрация</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/login'>Войти</Link>
              </li>

              <li className="nav-item" onClick={() => {
                dispatch(userLogoutAC());
              }}>
                <Link className="nav-link" to='/'>Выйти</Link>
              </li>

              
            </ul>

          

          </div>
        </div>
      </nav>
  );
}

export default Nav;
