import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from "../public/images/sliderhome_img1.png";
import sliderimg2 from "../public/images/sliderhome_img2.png";
import sliderimg3 from "../public/images/sliderhome_img3.png";
import Image from "next/image";

export interface ISliderHomeRecruitProps {}

export default function SliderHomeRecruit(props: ISliderHomeRecruitProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0",
          autoplay: true,
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current: number) => {
      if (activeSlide === slides.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(current + 1);
      }
    },
  };

  const slides = [
    sliderimg1,
    sliderimg2,
    sliderimg3,
    sliderimg1,
    sliderimg2,
    sliderimg3,
  ];
  return (
    <div>
      <Slider {...settings} className="Slider_home">
        {slides.map((slides, index) => (
          <div
            key={index}
            className={`slider-slide ${activeSlide === index ? "active" : ""}`}
          >
            <div
              className={`sliderhomerecruit ${
                activeSlide === index ? "active" : ""
              }`}
            >
              <div
                className={`sliderhomerecruit_imgs ${
                  activeSlide === index ? "active" : ""
                }`}
              >
                <Image
                  src={slides}
                  alt=""
                  className="sliderhomerecruit_images"
                />
              </div>

              <div className="sliderhomerecuit_p">
                <p className="sliderhomerecrit_number">#15626</p>
              </div>

              <div
                className={`sliderhomerecruit_box ${
                  activeSlide === index ? "active" : ""
                }`}
              >
                <div className="sliderhomerecuit_box_1">
                  <h4 className="sliderhomerecruit_box1_h4">Random Name</h4>
                  <p className="sliderhomerecruit_box1_p">#4472346</p>
                </div>

                <div className="sliderhomerecruit_box2">
                  <h4 className="sliderhomerecruit_box2_h4">Best Bid</h4>
                  <p className="sliderhomerecruit_box2_p">#4472346</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
