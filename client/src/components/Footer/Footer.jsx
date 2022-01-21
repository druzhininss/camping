import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram (filled).svg';
import Youtube from '../../assets/YouTube.svg';

function Footer() {
  return (
      <footer className={style.footerSize}>
        <div className={style.container}>
          <div className={style.footer}>
               <div className={style.item}>
                <ul className={style.social}>
                  <li className={style.title}>ПОДПИСЫВАЙТЕСЬ НА НАС</li>
                  <div className={style.socialPic}>
                  <li className={style.item}> <a className={style.link} href=""><img src={Instagram} alt="inst" /></a> </li>
                  <li className={style.item}> <a className={style.link} href=""><img src={Youtube} alt="youtube" /></a> </li>
                  <li className={style.item}> <a className={style.link} href=""><img src={Facebook} alt="face" /></a> </li>
                  </div>
                </ul>
              </div>
              <div className={style.item}>
                <ul className={style.social}>
                  <li className={style.title}>АДРЕС</li>
                  <li className={style.list}>  <p className={style.link} href="">Кирочная 19, строение 2,<br/> Санкт-Петербург, Россия</p> </li>
                </ul>
              </div>
              <div className={style.item}>
                <ul className={style.social}>
                  <li className={style.title}>КОНТАКТЫ</li>
                  <li className={style.item}> www.camping.com</li>
                  <li className={style.item}>P.  (+8800) 4670000</li>
                </ul>
              </div>
              <div className={style.item}>
                <ul className={style.social}>
                  <li className={style.title}>
                    <Link className={`${style.link_view}`}  to='/feedback'> ОТЗЫВЫ</Link></li>
                </ul>
              </div>
            </div>
        </div>
      </footer>
  );
}

export default Footer;
