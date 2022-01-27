import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper';



export default function Home({order, setOrder} = props) {  

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperF, setThumbsSwiperF] = useState(null);
  const [ addMore, setAddMore ] = useState(1);

  const price = '125.00'; 
    const [ finalPrice, setFinalPrice ] = useState(price);

  useEffect(() => {
    function getPrice() {     
      setFinalPrice(price * addMore);
    }
    getPrice();
   }, [price, finalPrice, addMore]);

 


  const [fullScreen, setFullScreen] = useState(false);

  const data = [
    {
      'id': 1,
      'imagem': '/image-product-1.jpg',
      'nome': 'Fall Limited Edition Sneakers',
      'preco': '$125.00',
      'precoFinal': {finalPrice},      
      'qty': {addMore},
    }
  ];

  return (
    <main className="product">
      <div className="container">
        <div className="gridProduct">
    
          <div className="slideProduct">  
            <Swiper
              modules={[Thumbs, Navigation]}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={0}
              slidesPerView={1}
              className='productSlide'             
              onClick={() => setFullScreen(true)}   
            >
          
              <SwiperSlide>
                <img src="/image-product-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/image-product-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/image-product-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/image-product-4.jpg" />
              </SwiperSlide>
             
              
             
             
            </Swiper>
           

            <Swiper modules={[Thumbs, Navigation]} watchSlidesProgress onSwiper={setThumbsSwiper} className='thumbProduct'>
              <SwiperSlide><img src="/image-product-1-thumbnail.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/image-product-2-thumbnail.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/image-product-3-thumbnail.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/image-product-4-thumbnail.jpg" /></SwiperSlide>
             
            </Swiper>           
          </div>

          <div className={`slideProductFull ${fullScreen && 'show'}`}>  
        <div className="swiper-button-next-unique"> </div>
        <div className="swiper-button-prev-unique"> </div>

          <img src="/icon-close.svg" onClick={() => setFullScreen(false)} id="btnClose" />
            <Swiper
              modules={[Thumbs, Navigation]}
              thumbs={{ swiper: thumbsSwiperF }}
              spaceBetween={0}
              slidesPerView={1}
              className='productSlide' 
              navigation={{
                nextEl: '.swiper-button-next-unique',
                prevEl: '.swiper-button-prev-unique'
              }}
            >
             
              <SwiperSlide>
                <img src="/image-product-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/image-product-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/image-product-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/image-product-4.jpg" />
              </SwiperSlide>
             
              
             
             
            </Swiper>
           

            <Swiper modules={[Thumbs, Navigation]} watchSlidesProgress onSwiper={setThumbsSwiperF} className='thumbProduct'>
              <SwiperSlide><img src="/image-product-1-thumbnail.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/image-product-2-thumbnail.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/image-product-3-thumbnail.jpg" /></SwiperSlide>
              <SwiperSlide><img src="/image-product-4-thumbnail.jpg" /></SwiperSlide>
             
            </Swiper>           
          </div>
      
          <div className="infoProduct">
            <h4>sneaker company</h4>
            <h1>Fall limited edition sneakers</h1>

            <p>These low-profile are your perfect casua wear companion. featuring a durable rubber outer sole, they'll withstand every the weather can offer.</p>

            <div className="price">
              <div className="boxPrices">
                <span className='currentPrice'>${price}</span>
                <span className='pill offer'>50%</span>
              </div>              
              <span className='oldPrice'>$250.00</span>
            </div>

            <div className="buttons">
              <div className="buttonsAddRemove">
                <button onClick={() => setAddMore(addMore - 1)} disabled={addMore <= 1}><img src="/icon-minus.svg" /></button>
                <span>{addMore}</span>
                <button onClick={() => setAddMore(addMore + 1)}><img src="/icon-plus.svg" /></button>
              </div>

              <button className="btnBuy" onClick={() => setOrder(data)}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"/></svg> Add to cart</button>
            </div>


          </div>


        </div>
      </div>
    </main>
  )
}
