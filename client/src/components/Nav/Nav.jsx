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
    // <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#D2B48C (tg://search_hashtag?hashtag=D2B48C)' }}>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(#28292bce (tg://search_hashtag?hashtag=28292bce), #50525400 (tg://search_hashtag?hashtag=50525400))', padding: '30px' }}>
      <div className={styleNav.logo}>
        <Link to='/' className="navbar-brand"><img className={styleNav.logoImg} src={Logo} alt="logo" /></Link>
      </div>
      <div className={styleNav.logoFlex}>

        <div className="container-fluid d-flex justify-content-between">
          <div className='container-fluid d-flex justify-content-around'>
            <div className="d-flex justify-content-between align-items-center">
              <Link className={styleNav.product_links} to='/products/palatki'>Палатки</Link>
              <Link className={styleNav.product_links} to='/products/spalniki'>Спальники</Link>
              <Link className={styleNav.product_links} to='/products/kovriki'>Коврики</Link>
            </div>
            <div className="navbar" id="navbarSupportedContent">
              <form className="d-flex">
                <input className="form-control me-2 alert-light" type="search" placeholder="Поиск" aria-label="Search" style={{ backgroundColor: '#1f472fc6 (tg://search_hashtag?hashtag=1f472fc6)', color: '#e0e0e0f2 (tg://search_hashtag?hashtag=e0e0e0f2)' }} />
                <button className="btn btn-outline-light" type="submit" style={{ backgroundColor: '#1f472fc6 (tg://search_hashtag?hashtag=1f472fc6)' }}>Поиск</button>
              </form>
            </div>
          </div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
            {login
              ?
              <>
                {/* <li className="nav-item">
                  <Link className="nav-link" to='/cart'><img className={styleNav.cart} src={Cart} alt="logo" /></Link>
                </li> */}
                <li className={styleNav.nav_link_style}>
                  <Link style={{ color: '#e0e0e0ea (tg://search_hashtag?hashtag=e0e0e0ea)' }} className="nav-link" to='/cart'><img
                    className={styleNav.cart} src={Cart} alt="logo" /></Link>
                </li>
                <li className={styleNav.nav_link_style}>
                  <Link style={{ color: '#e0e0e0ea (tg://search_hashtag?hashtag=e0e0e0ea)' }} className="nav-link" to='/profile' >Мои заказы</Link>
                </li>
                <li className={styleNav.nav_link_style}>
                  <Link style={{ color: '#e0e0e0ea (tg://search_hashtag?hashtag=e0e0e0ea)' }} className="nav-link" to='/' onClick={() => dispatch(userLogoutAC())}>Выйти</Link>
                </li>
              </>
              :
              <>
                <li className={styleNav.nav_link_style}>
                  <Link className="nav-link" style={{ color: '#e0e0e0ea (tg://search_hashtag?hashtag=e0e0e0ea)' }} to='/registration' >Регистрация</Link>
                </li>
                <li className={styleNav.nav_link_style}>
                  <Link style={{ color: '#e0e0e0ea (tg://search_hashtag?hashtag=e0e0e0ea)' }} className="nav-link" to='/login' >Войти</Link>
                </li>
              </>
            }
          </ul>
        </div>

      </div>
    </nav >
  );
}

export default Nav;
