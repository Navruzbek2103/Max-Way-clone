import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import SiteLogo from "./../../assets/images/site-logo.webp"



const index = () => {
   return (
      <footer className='footer'>
         <div className="container">
            <div className="footer__menu">
               <Link to="" className='footer__menu-logoLink'>
                  <img src={SiteLogo} alt="this image is Max Way site logo" className="footer__menu-logoLink-img" />
               </Link>
               <ul className="footer__menu-list">
                  <li className="footer__menu-item">
                     <NavLink to="" className="footer__menu-item-link">
                        Filiallar
                     </NavLink>
                  </li>
                  <li className="footer__menu-item">
                     <NavLink to="" className="footer__menu-item-link">
                        Biz haqimizda
                     </NavLink>
                  </li>
                  <li className="footer__menu-item">
                     <NavLink to="" className="footer__menu-item-link">
                        Bog'lanish
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default index;