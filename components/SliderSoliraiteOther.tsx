import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SolitaireOtherImg1 from "../public/images/slideOther1.png";
import SolitaireOtherImg2 from "../public/images/slideOther2.png";
import SolitaireOtherImg3 from "../public/images/slideOther3.png";

export interface SliderSoliraiteOtherProps {}

export default function SliderSoliraiteOther(props: SliderSoliraiteOtherProps) {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="solitaire-other-slider">
        <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="100">
          <div className="solitaire-box1">
            <Image src={SolitaireOtherImg1} alt="" className="solitaire-other-images"/>
            <div className="slider-solitaire-other-p">
              <p className="solitaire-other-lorem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="solitaire-icon-arr">
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="100">
          <div className="solitaire-box1">
            <Image src={SolitaireOtherImg2} alt="" className="solitaire-other-images"/>
            <div className="slider-solitaire-other-p">
              <p className="solitaire-other-lorem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="solitaire-icon-arr">
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="100">
          <div className="solitaire-box1">
            <Image src={SolitaireOtherImg1} alt="" className="solitaire-other-images"/>
            <div className="slider-solitaire-other-p">
              <p className="solitaire-other-lorem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="solitaire-icon-arr">
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="100">
          <div className="solitaire-box2">
            <Image src={SolitaireOtherImg3} alt="" className="solitaire-other-images"/>
            <div className="slider-solitaire-other-p">
              <p className="solitaire-other-lorem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="solitaire-icon-arr">
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
