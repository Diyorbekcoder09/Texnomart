import './App.css';
import { FaUserAlt, FaRegHeart, } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import header_logo from "../src/assets/images/header_logo.svg"
import main_rasm1 from "../src/assets/images/fon1.webp"
import main_rasm2 from "../src/assets/images/fon2.webp"
import main_rasm3 from "../src/assets/images/fon3.webp"
import main_rasm4 from "../src/assets/images/fon4.webp"
import section_rasm1 from "../src/assets/images/card1.png"
import section_rasm2 from "../src/assets/images/card2.png"
import section_rasm3 from "../src/assets/images/card3.png"
import section_rasm4 from "../src/assets/images/card4.png"
import section_rasm5 from "../src/assets/images/card5.png"
import section_rasm6 from "../src/assets/images/card6.png"
import section_rasm7 from "../src/assets/images/card7.png"
import section_rasm8 from "../src/assets/images/card8.png"
import section_rasm9 from "../src/assets/images/card9.png"
import section_rasm10 from "../src/assets/images/card10.png"
import tikuv from "../src/assets/images/tikuv mashinasi.webp"
import micro from "../src/assets/images/micro to'lqinli pech.jpg"
import telefon from "../src/assets/images/tel.webp"
import soch_dazmol from "../src/assets/images/soch utik.webp"
import soc_mashinasi from "../src/assets/images/soch mashinasi.webp"
import electr from "../src/assets/images/electr ustara.webp"
import firma1 from "./assets/images/firma1.webp"
import firma2 from "./assets/images/firma2.webp"
import firma3 from "./assets/images/firma3.webp"
import firma4 from "./assets/images/firma4.webp"
import firma5 from "./assets/images/firma5.png"
import firma6 from "./assets/images/firma6.svg"
import firma7 from "./assets/images/firma7.svg"
import firma8 from "./assets/images/firma8.svg"
import firma9 from "../src/assets/images/firma9.webp"
import firma10 from "./assets/images/firma10.webp"
import firma11 from "./assets/images/firma11.webp"
import firma12 from "./assets/images/firma12.png"
import firma14 from "./assets/images/firma14.svg"
import firma15 from "./assets/images/firma15.webp"
import firma16 from "./assets/images/firma16.webp"
import honor from "./assets/images/honor.webp"
import huavi from "./assets/images/huave.webp"
import samsung from "./assets/images/samsung.webp"
import gaz from "./assets/images/gaz pleta.jpg"
import yangi1 from "./assets/images/yangi1.webp"
import yangi2 from "./assets/images/yangi2.webp"
import yangi3 from "./assets/images/yangi3.webp"
import yangi4 from "./assets/images/yangi4.webp"
import yangi5 from "./assets/images/yangi5.webp"
import yangi6 from "./assets/images/yangi6.webp"
import yangi7 from "./assets/images/yangi7.webp"
import yangi8 from "./assets/images/yangi8.webp"
import yangi9 from "./assets/images/yangi9.webp"
import katta_rasm from "./assets/images/katta.png"
import yetkazish1 from "./assets/images/yetkazib berish1.svg"
import yetkazish2 from "./assets/images/yetkazib berish2.svg"
import yetkazish3 from "./assets/images/yetkazib berish 3.svg"
import play from "./assets/images/google play.svg"
import app from "./assets/images/app.svg"
import karta1 from "./assets/images/uzcard.webp"
import karta2 from "./assets/images/humo.webp"
import karta3 from "./assets/images/payme.webp"
import karta4 from "./assets/images/click.webp"



import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';




function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  return (
    <div className="rang">
      <div className="container">
        <div className="rang">
          <header className="header">
            <img src={header_logo} alt="" className="logo" />
            <button className="header_btn">
              <i class="fa-solid fa-bars"></i>
              Каталог
            </button>
            <input type="text" required placeholder=' Qidirish' className='header_input' />
            <div className="header_title">
              <FaUserAlt className='icon' />
              <p className="header_text">Кириш</p>
            </div>
            <div className="header_title">
              <FaRegHeart className='icon' />
              <p className="header_text">Севимлилар</p>
            </div>
            <div className="header_title">
              <CiShoppingCart className='icon' />
              <p className="header_text">Саватча</p>
            </div>
          </header>
          <div className="takliflar">
            <p className="taklif_text"> <i class="fa-solid fa-fire"></i> Aкциялар</p>
            <p className="taklif_text"><i class="fa-solid fa-bolt"></i>1+1</p>
            <p className="taklif_text">Ҳаво совутгичлар</p>
            <p className="taklif_text">Иситгичлар</p>
            <p className="taklif_text">Смартфонлар</p>
            <p className="taklif_text">Музлатгичлар</p>
            <p className="taklif_text">Чангютгичлар</p>
            <p className="taklif_text">Ноутбуклар</p>
            <p className="taklif_text">Телевизорлар</p>
            <p className="taklif_text">Барча категориялар</p>
          </div>
        </div>
        <main className="main">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><img src={main_rasm1} alt="" className="rasm" /></SwiperSlide>
            <SwiperSlide><img src={main_rasm2} alt="" className="rasm" /></SwiperSlide>
            <SwiperSlide><img src={main_rasm3} alt="" className="rasm" /></SwiperSlide>
            <SwiperSlide><img src={main_rasm4} alt="" className="rasm" /></SwiperSlide>

            <div className="autoplay-progress" slot="container-end">

            </div>
          </Swiper>
        </main>
        <section className="section">
          <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper" >
            <SwiperSlide><div className="card">
              <p className="card_text">telefon</p>
              <img src={section_rasm1} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">Konditsoner</p>
              <img src={section_rasm2} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">Changyutgich</p>
              <img src={section_rasm3} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">Muzlatgich</p>
              <img src={section_rasm4} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">Noutbooklar</p>
              <img src={section_rasm5} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">Televezor</p>
              <img src={section_rasm6} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">qahva mashinalr</p>
              <img src={section_rasm7} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">Kir yuvish mashinasi</p>
              <img src={section_rasm8} alt="" className="img2" />
            </div></SwiperSlide>
            <SwiperSlide><div className="card">
              <p className="card_text">fenlar</p>
              <img src={section_rasm9} alt="" className="img2" />
            </div></SwiperSlide>

          </Swiper>
        </section>
        <div className="guruh">
          <p className="pech">Хит савдо</p>
          <p className="pech1">Барчасини кўриш<i class="fa-solid fa-arrow-right"></i></p>
        </div>
        <section className="section2">
          <Swiper className=""
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}

          >
            <SwiperSlide className='xarid'>
              <img src={micro} alt="" className="xarid_img" />
              <p className="xarid_text">Micro to'lqinli pech/microwave oven</p>
              <div className="oy">122,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">1 420 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm4} alt="" className="xarid_img" />
              <p className="xarid_text">Muzlatgich/Refrigerator</p>
              <div className="oy">252,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">4 000 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm5} alt="" className="xarid_img" />
              <p className="xarid_text">Noutbook/Noutbook</p>
              <div className="oy">200,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">5 560 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm6} alt="" className="xarid_img" />
              <p className="xarid_text">Televezor/television</p>
              <div className="oy">250.223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">2 300 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm9} alt="" className="xarid_img" />
              <p className="xarid_text">Fenlar/
                sciences</p>
              <div className="oy">10,823 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">233 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm8} alt="" className="xarid_img" />
              <p className="xarid_text">Kir yuvish mashina/
                Washing machine</p>
              <div className="oy">122,273 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">3 000 500 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={tikuv} alt="" className="xarid_img" />
              <p className="xarid_text">Tikuv mashinas/sewing machine</p>
              <div className="oy">50,203 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">1 200 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm10} alt="" className="xarid_img" />
              <p className="xarid_text">Planshet/planshet</p>
              <div className="oy">125,202 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">2 000 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={section_rasm3} alt="" className="xarid_img" />
              <p className="xarid_text">CHangyutgich/
                Vacuum cleaner</p>
              <div className="oy">99,523 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">1 500 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>

            </SwiperSlide>


          </Swiper>


        </section>
        <section className="section2">
          <p className="pech">Янги маҳсулотлар</p>
          <Swiper className=""
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={50}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}

          >
            <SwiperSlide className='xarid'>
              <img src={micro} alt="" className="xarid_img" />
              <p className="xarid_text">Micro to'lqinli pech/microwave oven</p>
              <div className="oy">122,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">1 420 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={telefon} alt="" className="xarid_img" />
              <p className="xarid_text">Telefon</p>
              <div className="oy">252,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">4 000 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={soch_dazmol} alt="" className="xarid_img" />
              <p className="xarid_text">Soch dazmoli</p>
              <div className="oy">10,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">200 000</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={electr} alt="" className="xarid_img" />
              <p className="xarid_text">Electr ustana</p>
              <div className="oy">10,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">200 000</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={electr} alt="" className="xarid_img" />
              <p className="xarid_text">Electr ustana</p>
              <div className="oy">10,223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">200 000</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={soc_mashinasi} alt="" className="xarid_img" />
              <p className="xarid_text">Soch mashinasi</p>
              <div className="oy">25.223 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">300 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xarid'>
              <img src={electr} alt="" className="xarid_img" />
              <p className="xarid_text">Elektr ustara/
                sciences</p>
              <div className="oy">10,823 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">233 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </section>
        <section className="ferma">
          <p className="ferma_text">Оммабоп брендлар</p>
          <Swiper
            slidesPerView={6}
            spaceBetween={40}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="fermalar"
          >
            <SwiperSlide>
              <img src={firma1} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma2} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma3} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma4} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma5} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma6} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma7} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma8} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma9} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma10} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma11} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma12} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma16} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma14} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma15} alt="" className="nom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firma16} alt="" className="nom" />
            </SwiperSlide>

          </Swiper>
        </section>
        <section className="buyurtma">
          <p className="ferma_text">Тўпламлар</p>
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='sotib_olish'>
              <img src={samsung} alt="" className="xarid_img2" />
              <p className="xarid_text">Samsung  Galaxy S 24 ultra </p>
              <div className="oy">500,823 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">14 000 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sotib_olish'>
              <img src={huavi} alt="" className="xarid_img2" />
              <p className="xarid_text">Huavei Pura 70 ultra</p>
              <div className="oy">400,153 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">8 520 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide className='sotib_olish'>
              <img src={honor} alt="" className="xarid_img2" />
              <p className="xarid_text">Honor 8 A </p>
              <div className="oy">340,000 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">7 000 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sotib_olish'>
              <img src={gaz} alt="" className="xarid_img2" />
              <p className="xarid_text">Gz pleta uneversal</p>
              <div className="oy">260,823 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">4 522 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sotib_olish'>
              <img src={honor} alt="" className="xarid_img2" />
              <p className="xarid_text">Honor 8 A 512 Gb </p>
              <div className="oy">380,444 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">6 800 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sotib_olish'>
              <img src={huavi} alt="" className="xarid_img2" />
              <p className="xarid_text">Huavei Pura 70 ultra</p>
              <div className="oy">400,823 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">7 555 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </section>
        <section className="yangiliklar">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}

            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='yangilik'>
              <img src={yangi1} alt="" className="yangi" />
              <p className="yangi_text">10-avgust 2023</p>
              <p className="yangi_text2">Iphone 15 pro</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi2} alt="" className="yangi" />
              <p className="yangi_text">5-aprel 2024</p>
              <p className="yangi_text2">Galaxy z Fold 5</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi3} alt="" className="yangi" />
              <p className="yangi_text">18-may 2023</p>
              <p className="yangi_text2">Uyingiz uchun kondetsoner</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi4} alt="" className="yangi" />
              <p className="yangi_text">8-sentyabr 2023</p>
              <p className="yangi_text2">To'g'ri soch turmagi</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi5} alt="" className="yangi" />
              <p className="yangi_text">22-noyabr 2023</p>
              <p className="yangi_text2">O'bekistonda xayriya mahalliy brendlar tmonidan ...</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi6} alt="" className="yangi" />
              <p className="yangi_text">25-dekabr 2023</p>
              <p className="yangi_text2">Sizdan xarid - bizdan damas</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi7} alt="" className="yangi" />
              <p className="yangi_text">5-mart 2024</p>
              <p className="yangi_text2">2024-yilda O'zbekistonda eng yaxshi smartfonlar</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi8} alt="" className="yangi" />
              <p className="yangi_text">16-aprel 2024</p>
              <p className="yangi_text2">O'zbekistonda mashxur televezorlar</p>
            </SwiperSlide>
            <SwiperSlide className='yangilik'>
              <img src={yangi9} alt="" className="yangi" />
              <p className="yangi_text">17-oktyabr 2023</p>
              <p className="yangi_text2">O'bekistonda mashxur noutbooklar</p>
            </SwiperSlide>
          </Swiper>
        </section>
        <img src={katta_rasm} alt="" className="katta_rasm" />
        <p className="text">Смартфонлар ва маиший техника муддатли тўловга</p>
        <section className="yetkazib_berish">
          <div className="y_berish">
            <img src={yetkazish1} alt="" className="y_img" />
            <div className="barcha">
              <p className="yetkazib_berish_text">Муддатли тўловга сотиб олиш</p>
              <p className="yetkazib_berish_text2">Қулай бўлиб тўлаш</p>
            </div>
          </div>
          <div className="y_berish">
            <img src={yetkazish2} alt="" className="y_img" />
            <div className="barcha">
              <p className="yetkazib_berish_text">Бепул етказиб бериш</p>
              <p className="yetkazib_berish_text2">Техномартга товарларни eтказиб бериш шартлари</p>
            </div>
          </div>
          <div className="y_berish">
            <img src={yetkazish3} alt="" className="y_img" />
            <div className="barcha">
              <p className="yetkazib_berish_text">Маҳсулотлар учун кафолат</p>
              <p className="yetkazib_berish_text2">Техномартда маҳсулотнинг кафолати ва қайтарилиши ҳақида ҳамма нарсани билиб олинг</p>
            </div>
          </div>
        </section>
        <section className="kam">
          <p className="text2">Яқинда кўриб чиқилган маҳсулотлар</p>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}

            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='sotib_olish'>
              <img src={honor} alt="" className="xarid_img2" />
              <p className="xarid_text">Honor 8 A 512 Gb </p>
              <div className="oy">380,444 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">6 800 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sotib_olish'>
              <img src={huavi} alt="" className="xarid_img2" />
              <p className="xarid_text">Huavei Pura 70 ultra</p>
              <div className="oy">400,823 so'mdan / 24 oy</div>
              <div className="guruh">
                <p className="som">7 555 000 so'm</p>
                <div className="savat">
                  <CiShoppingCart />

                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </section>
      </div>
      <footer className="footer">
        <div className="footer_title">
          <div className="footer_child">
            <p className="f_text">Саволингиз борми? Қўнғироқ қилинг</p>
            <p className="f_text1">+998 71 209 99 44</p>
            <div className="linklar">
              <i class="fa-brands fa-square-facebook link"></i>
              <i class="fa-brands fa-telegram link"></i>
              <i class="fa-brands fa-square-instagram link"></i>
              <i class="fa-brands fa-square-youtube link"></i>
            </div>
            <div className="footer_btnlar">
              <img src={play} alt="" className="play" />
              <img src={app} alt="" className="play" />

            </div>
            <p className="f_text2"><u>Дўконлар манзиллари</u></p>
          </div>
          <div className="footer_child">
            <p className="f_text3">Компания</p>
            <ul className="item">
              <li className="item_text">Юридик шахслар учун</li>
              <li className="item_text">Биз ҳақимизда</li>
              <li className="item_text">Янгиликлар ва блоглар</li>
              <li className="item_text">IMEI ни текшириш</li>
            </ul>
          </div>
          <div className="footer_child">
            <p className="f_text3">Маълумот</p>
            <ul className="item">
              <li className="item_text">Бепул етказиб бериш</li>
              <li className="item_text">Техномартда ишлаш</li>
              <li className="item_text">Шахсий кабинет</li>
              <li className="item_text">Aлоқа рақамлари</li>
            </ul>
          </div>
          <div className="footer_child">
            <p className="f_text3">Ҳаридорга ёрдам</p>
            <ul className="item">
              <li className="item_text">Махсулотни қайтариш</li>
              <li className="item_text">Маҳсулотлар учун кафолат</li>

            </ul>
          </div>
        </div>
        <br />
        <br />
        <hr />

        <div className="f_guruh">
          <p className="f_text4">2016-2024 © texnomart.uz. Барча ҳуқуқлар ҳимояланган. Товарларнинг кўрсатилган қиймати ва уларни сотиб олиш шартлари жорий санага амал қилади</p>
          <div className="kartalar">
            <img src={karta1} alt="" className="karta" />
            <img src={karta2} alt="" className="karta" />
            <img src={karta3} alt="" className="karta" />
            <img src={karta4} alt="" className="karta" />
          </div>

        </div>
      </footer>
    </div>

  );
}

export default App;

