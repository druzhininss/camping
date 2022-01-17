import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand"><img style={{width: '7rem'}} src="https://www.alexika.ru/media/uploads/main/alexika_logo_web_1.png" alt="logo" /></Link>
          <Link className="navbar-brand" to='/products/palatki'>Палатки</Link>
          <Link className="navbar-brand" to='/products/spalniki'>Спальники</Link>
          <Link className="navbar-brand" to='/products/kovriki'>Коврики</Link>

          <div className="navbar" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/registration'>Регистрация</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/login'>Войти</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/logout'>Выйти</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/cart'>Корзина</Link>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>

          </div>
        </div>
      </nav>
  );
}

export default Nav;
