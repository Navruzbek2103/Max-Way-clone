import React from 'react';
import "./style.scss";
import { BiLogoTelegram } from "react-icons/bi"
import ImgQRCode from "./../../assets/images/QR-code.jpg"

const index = () => {
   return (
      <div className='contact-page'>
         <div className="container">
            <address className="contact-page__box">
               <h2 className="contact-page__box-title">Bog'lanish</h2>
               <div className="contact-page__box-inner">
                  <div className="contact-page__box-inner-imgBox">
                     <img src={ImgQRCode} alt="QR-code image" className="contact-page__box-inner-imgBox-img" />
                  </div>
                  <p className="contact-page__box-inner-desc">Telegramda sharh qoldiring yoki savol bering</p>
                  <a href="https://t.me/maxwaymasterfood_bot" className="contact-page__box-inner-link"><BiLogoTelegram className='contact-page__box-inner-link-icon'/> @maxwaymasterfood_bot</a>
               </div>
               <h3 className="contact-page__box-subTitle">Yagona aloqa markazi</h3>
               <a href='tel:+998712005400' className="contact-page__box-desc">+998712005400</a>
            </address>
         </div>
      </div>
   );
};

export default index;