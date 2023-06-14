import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import slider1 from '../public/images/sliderabout1.png'
import slider2 from '../public/images/sliderabout2.png'
import slider3 from '../public/images/sliderabout3.png'
import slider4 from '../public/images/sliderabout4.png'
import slider5 from '../public/images/sliderabout5.png'
import slider6 from '../public/images/sliderabout6.png'
import slider7 from '../public/images/sliderabout7.png'
import slider8 from '../public/images/sliderabout8.png'
import slider9 from '../public/images/sliderabout9.png'

export interface SlideraboutProps {
}

export default function Sliderabout(props: SlideraboutProps) {
   const settings = {
      // Cấu hình của Slider (tuỳ chọn)
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
   };
   return (
      <div>
         <Slider {...settings}>
            <div className="slider1">
               <Image src={slider1} alt="" className="sliderabout_image" />
            </div>

            <div className="slider1">
               <Image src={slider2} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider3} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider4} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider5} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider6} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider7} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider8} alt="" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider9} alt="" className='sliderabout_image' />
            </div>
         </Slider>
      </div>
   );
}
