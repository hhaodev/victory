import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { StaticImageData } from 'next/image';



export interface SlidersoliraiteProps {
  image1: StaticImageData,
  image2: StaticImageData,
  image3: StaticImageData,
}

export default function Slidersoliraite(props: SlidersoliraiteProps) {
  const {
    image1,
    image2,
    image3,
  }
    = props
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
      <Slider {...settings} className="slider-soliraite-features1">
        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={image1} alt="" className="slider_solitaireimgs" />
          <h2 className="solirate_features_h2">animal farm jam </h2>
          <p className="soliraite_features_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={image2} alt="" className="slider_solitaireimgs" />
          <h2 className="solirate_features_h2">animal farm jam </h2>
          <p className="soliraite_features_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={image3} alt="" className="slider_solitaireimgs" />
          <h2 className="solirate_features_h2">animal farm jam </h2>
          <p className="soliraite_features_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Slider>
    </div>
  );
}
