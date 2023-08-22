import React from 'react';
import "./style.scss";
import HeroBannerImage from "./../../assets/images/about-page-banner.webp";


const index = () => {
   return (
      <div className='about-page'>
         <div className="container about-page__wrapper">
            <h2 className="about-page__title">Kompaniya haqida</h2>
            <div className="about-page__imgBox">
               <img src={HeroBannerImage} alt="this image is the company image" className="about-page__imgBox-img" />
            </div>
            <p className="about-page__desc">
               Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan. Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud. <br />
               Taomnoma asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va donarlardan iborat. Bizning ustuvor yo'nalishlarimiz - ingredientlarning yangiligi va sifati, qo'shimchalarning xilma-xilligi, arzon narxlar va mehmonlarning takliflariga e'tibor. <br />
               Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga xos retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli brendingiz bo'lishda davom etish uchun narx va sifatning mukammal muvozanatini qidiramiz. <br />
               Agar siz kutilmaganda biz tomondan yomon xizmat yoki past sifatli pishirilgan taomga duch kelsangiz, bizga @maxwaymasterfood_bot manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a, bu tufayli bizda o'sish uchun maqsad bo’ladi.
            </p>
         </div>
      </div>
   );
};

export default index;