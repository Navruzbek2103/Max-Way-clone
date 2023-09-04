import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import emptyCartImg from "./../../assets/images/empty-cart.svg"


const index = () => {
   return (
      <div className='cart-page'>
         <div className="container">
            <div className="cart-page__box">
               <img src={emptyCartImg} alt="Shopping cart" className="cart-page__box-img" />
               <h2 className="cart-page__box-title">Sizning savatingiz hozircha bo'sh</h2>
               <p className="cart-page__box-text">Buyurtma qilingan narsalar shu yerda paydo bo'ladi.</p>
               <Link to="/" className='cart-page__box-link'>Menyuga qaytish</Link>
            </div>
         </div>
      </div>
   );
};

export default index;