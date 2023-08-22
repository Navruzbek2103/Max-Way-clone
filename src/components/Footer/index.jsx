import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import SiteLogo from "./../../assets/images/site-logo.webp"
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai"

const index = () => {
   let a = "lorem"
   let date = new Date();
   let result = date.getFullYear()
   console.log(result)
   return (
      <footer className='footer'>
         <div className="container">
            <div className="footer__menu">
               <Link to="" className='footer__menu-logoLink'>
                  <img src={SiteLogo} alt="this image is Max Way site logo" className="footer__menu-logoLink-img" />
               </Link>
               <ul className="footer__menu-list">
                  <li className="footer__menu-item">
                     <NavLink to="/branches" className="footer__menu-item-link">
                        Filiallar
                     </NavLink>
                  </li>
                  <li className="footer__menu-item">
                     <NavLink to="/about" className="footer__menu-item-link">
                        Biz haqimizda
                     </NavLink>
                  </li>
                  <li className="footer__menu-item">
                     <NavLink to="/contacts" className="footer__menu-item-link">
                        Bog'lanish
                     </NavLink>
                  </li>
               </ul>
            </div>

            <address className='footer__address'>
               <p className="footer__address-copyright">© Delever 2020 - {result} Barcha huquqlar himoyalangan</p>

               <ul className="footer__address-socialList">
                  <li className="footer__address-socialItem">
                     <a href="https://www.instagram.com/maxwayuz/" target='_blank' className="footer__address-socialItem-link">
                        <AiOutlineInstagram className='footer__address-socialItem-link-icon' />
                     </a>
                  </li>
                  <li className="footer__address-socialItem">
                     <a href="https://www.facebook.com/maxway.uzb/" target='_blank' className="footer__address-socialItem-link">
                        <BiLogoFacebookCircle className='footer__address-socialItem-link-icon' />
                     </a>
                  </li>
                  <li className="footer__address-socialItem">
                     <a href="https://www.youtube.com/@maxway2010" target='_blank' className="footer__address-socialItem-link">
                        <AiFillYoutube className='footer__address-socialItem-link-icon' />
                     </a>
                  </li>
               </ul>
            </address>
         </div>
      </footer>
   );
};

export default index;