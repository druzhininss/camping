import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
      <footer>
        <div className={style.container}>
          <div className={style.footer}>
            <div className={style.foot}>
                <p className={style.text}>We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
                <ul className={style.social}>
                  <li className={style.item}> <a className={style.link} href=""><img src="/images/Instagram (filled).svg" alt="inst" /></a> </li>
                  <li className={style.item}> <a className={style.link} href=""><img src="/images/YouTube.svg" alt="youtube" /></a> </li>
                  <li className={style.item}> <a className={style.link} href=""><img src="/images/Facebook.svg" alt="face" /></a> </li>
                </ul>
               </div>
              <div className={style.item}>
                <ul className={style.social}>
                  <li className={style.title}>Company</li>
                  <li className={style.list}>  <a className={style.link} href="">About Us</a> </li>
                  <li className={style.list}>  <a className={style.link} href="">Pricing</a> </li>
                  <li className={style.list}>  <a className={style.link} href="">Careers</a> </li>
                  <li className={style.list}>  <a className={style.link} href="">Press</a> </li>
                </ul>
              </div>
              <div className={style.item}>
                <ul className={style.social}>
                  <li className={style.title}>Contact Us</li>
                  <li className={style.item}> www.camping.com</li>
                  <li className={style.item}>P.  (+8800) 4670000</li>
                </ul>
              </div>
            </div>
        </div>
      </footer>
  );
}

export default Footer;
