import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styleNav from './Nav.module.css';
import Logo from '../../assets/campingLogo.png';
import Cart from '../../assets/cart.png'
import { userLogoutAC } from '../../redux/actionCreators/logoutAC';

function Nav() {
  const dispatch = useDispatch(); 
  const { login } = useSelector(state => state.userReducer);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#D2B48C'}}>
      <div className={styleNav.logo}>
        <Link to='/' className="navbar-brand"><img className={styleNav.logoImg} src={Logo} alt="logo" /></Link>
      </div>
      <div className={styleNav.logoFlex}>
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">

            {login
              ?
              <>
                <li className="nav-item">
                  <Link className="nav-link" to='/cart'><img className={styleNav.cart} src={Cart} alt="logo" /></Link>
                </li>
                <li >
                  <Link className="nav-link" to='/profile'>Личный кабинет</Link>
                </li>
                <li >
                  <Link className="nav-link" to='/' onClick={() => dispatch(userLogoutAC())}>Выйти</Link>
                </li>
              </>
              :
              <>
                <li className="nav-item">
                  <Link className="nav-link" to='/registration'>Регистрация</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/login'>Войти</Link>
                </li>
              </>
            }

          </ul>
        </div>
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to='/products/palatki'>Палатки</Link>
          <Link className="navbar-brand" to='/products/spalniki'>Спальники</Link>
          <Link className="navbar-brand" to='/products/kovriki'>Коврики</Link>

          <div className="navbar" id="navbarSupportedContent">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Поиск</button>
            </form>
          </div> 
        </div>
      </div>
    </nav>
  );
}

export default Nav;
