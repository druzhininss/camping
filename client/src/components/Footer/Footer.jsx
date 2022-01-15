import React from 'react';

function Footer(props) {
  return (
      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer-item">
              <a href="" class="footer-logo"> <img src="/images/Frispes.svg" alt="" /> </a>
                <p class="footer-item__text">We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
                <ul class="footer-social">
                  <li class="footer-social__item"> <a class="footer-social__link" href=""><img src="/images/Instagram (filled).svg" alt="inst" /></a> </li>
                  <li class="footer-social__item"> <a class="footer-social__link" href=""><img src="/images/YouTube.svg" alt="youtube" /></a> </li>
                  <li class="footer-social__item"> <a class="footer-social__link" href=""><img src="/images/Facebook.svg" alt="face" /></a> </li>
                </ul>
               </div>
              <div class="footer-item">
                <ul class="footer-list">
                  <li class="footer-list__title">Company</li>
                  <li class="footer-list__item">  <a class="footer-list__link" href="">About Us</a> </li>
                  <li class="footer-list__item">  <a class="footer-list__link" href="">Pricing</a> </li>
                  <li class="footer-list__item">  <a class="footer-list__link" href="">Careers</a> </li>
                  <li class="footer-list__item">  <a class="footer-list__link" href="">Press</a> </li>
                </ul>
              </div>
              <div class="footer-item">
                <ul class="footer-list">
                  <li class="footer-list__title">Contact Us</li>
                  <li class="footer-list__item"> E.  Hello@frispes.com</li>
                  <li class="footer-list__item"> A.  Jalan Jayakatwang  No.301 Ngasem, Kediri</li>
                  <li class="footer-list__item">P.  (+62) 82334670000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
