import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

function Nav() {

  return (
    <>
      <div className={style.title}>
        <h1 className={style.titleName}>Camping for Life</h1>
        <Link to='/'><div className={style.pic}></div></Link>
      </div>
      <nav className={style.nav}>
      <ul>
        <Link className={style.link} to='/products/palatki'>палатки</Link>
        <Link className={style.link} to='/products/spalniki'>спальники</Link>
        <Link className={style.link} to='/products/kovriki'>коврики</Link>
        <Link className={style.link} to='/registration'>регистрация</Link>
        <Link className={style.link} to='/login'>войти</Link>
        <Link className={style.link} to='/logout'>выйти</Link>
        <Link className={style.link} to='/cart'>Корзина</Link>
        <form>
        <input type="text" placeholder="Искать здесь..." />
        <button className={style.btn} type="submit"></button>
        </form>
      </ul>
      </nav>
    </>
  );
}

export default Nav;
