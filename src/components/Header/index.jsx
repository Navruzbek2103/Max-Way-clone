import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import SiteLogo from "./../../assets/images/site-logo.webp"
import { TiLocation } from "react-icons/ti";
import LangUzb from "./../../assets/images/uz.svg"
import { MdKeyboardArrowDown } from "react-icons/md"
import { PiShoppingCartSimpleFill } from "react-icons/pi"
import { BsFillPersonFill } from "react-icons/bs"


const index = () => {
   return (
      <header className='header'>
         <div className="container">
            <div className="header__wrapper">
               <nav className="nav">
                  <Link to="/" className='nav__logoLink'>
                     <img src={SiteLogo} alt="This logo is Max Way's logo" className="nav__logoLink-img" />
                  </Link>
                  <ul className="nav__list">
                     <li className="nav__item">
                        <Link to="" className='nav__item-link'>Menyu</Link>
                     </li>
                     <li className="nav__item">
                        <Link to="" className='nav__item-link'>Filiallar</Link>
                     </li>
                     <li className="nav__item">
                        <Link to="" className='nav__item-link'>Biz haqimizda</Link>
                     </li>
                     <li className="nav__item">
                        <Link to="" className='nav__item-link'>Bog'lanish</Link>
                     </li>
                  </ul>
               </nav>

               <div className="header__control">
                  <div className="header__control-deliver">
                     <div className="header__control-deliver-iconBox">
                        <TiLocation className='header__control-deliver-iconBox-icon' />
                     </div>
                     <div className="header__control-deliver-contentBox">
                        <p className="header__control-deliver-contentBox-desc1">Yetkazib berish, yoki olib ketish</p>
                        <div className="header__control-deliver-contentBox-desc2">Qabul qilib olish turini tanlang</div>
                     </div>
                  </div>
                  <div className="header__control-language">
                     <img src={LangUzb} alt="site language country flag" className="header__control-language-flag" />
                     <MdKeyboardArrowDown className='header__control-language-arrowIcon'/>
                  </div>
                  <div className="header__control-basket">
                     <div className="header__control-basket-iconBox">
                        <PiShoppingCartSimpleFill className='header__control-basket-iconBox-icon'/>
                     </div>
                     <p className="header__control-basket-text">0 so'm</p>
                  </div>
                  <div className="header__control-profile">
                     <BsFillPersonFill className='header__control-profile-icon' />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default index;