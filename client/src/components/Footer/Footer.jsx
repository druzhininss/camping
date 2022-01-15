import React from 'react';


function Footer() {
  return (
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-item">
              <a href="" className="footer-logo"> <img src="/images/Frispes.svg" alt="" /> </a>
                <p className="footer-item__text">We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
                <ul className="footer-social">
                  <li className="footer-social__item"> <a className="footer-social__link" href=""><img src="/images/Instagram (filled).svg" alt="inst" /></a> </li>
                  <li className="footer-social__item"> <a className="footer-social__link" href=""><img src="/images/YouTube.svg" alt="youtube" /></a> </li>
                  <li className="footer-social__item"> <a className="footer-social__link" href=""><img src="/images/Facebook.svg" alt="face" /></a> </li>
                </ul>
               </div>
              <div className="footer-item">
                <ul className="footer-list">
                  <li className="footer-list__title">Company</li>
                  <li className="footer-list__item">  <a className="footer-list__link" href="">About Us</a> </li>
                  <li className="footer-list__item">  <a className="footer-list__link" href="">Pricing</a> </li>
                  <li className="footer-list__item">  <a className="footer-list__link" href="">Careers</a> </li>
                  <li className="footer-list__item">  <a className="footer-list__link" href="">Press</a> </li>
                </ul>
              </div>
              <div className="footer-item">
                <ul className="footer-list">
                  <li className="footer-list__title">Contact Us</li>
                  <li className="footer-list__item"> E.  Hello@frispes.com</li>
                  <li className="footer-list__item"> A.  Jalan Jayakatwang  No.301 Ngasem, Kediri</li>
                  <li className="footer-list__item">P.  (+62) 82334670000</li>
                </ul>
              </div>
            </div>
        </div>
      </footer>
  );
}

export default Footer;
