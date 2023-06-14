import React from "react";
import Slidersoliraite from "@/components/Slidersoliraite";
import Navbar from "@/components/Navbar";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Image from "next/image";
import Besidefooter from "@/components/Besidefooter";
import logo_ios from "../../../public/images/logo-app-ios.png";
import logo_androi from "../../../public/images/logo-app-androi.png";
import slide1 from "../../../public/images/slideFeatureBasic1.png";
import slide2 from "../../../public/images/slideFeatureBasic2.png";
import slide3 from "../../../public/images/slideFeatureBasic3.png";
import reskinafterimg6 from "../../../public/images/reskin_profile6.png";
import reskinafterimg7 from "../../../public/images/reskin_profile7.png";
import reskinafterimg8 from "../../../public/images/reskin_profile8.png";
import reskinafterimg4 from "../../../public/images/reskin_profile4.png";
import reskinafterimg9 from "../../../public/images/reskin_profile9.png";
import Header from "@/components/Header";
import gamespeopledogs from "../../../public/images/games_people_dogs.png";

export interface BasicProps {}

export default function Basic(props: BasicProps) {
  return (
    <div>
      <Header />

      <main>
        <Navbar />
        <div className="container_reskin">
          <div className="reskin_header">
            <div
              className="reskin_header_content_left"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="header_content_left_title">
                <p>Discover Game You Will Love</p>
              </div>
              <div className="header_content_left_context">
                <p>
                  Read About Games <br /> That You Enjoy
                </p>
              </div>
              <div className="header_content_left_logoapp">
                <div className="logo_ios">
                  <Image src={logo_ios} alt="" className="logo_mobiles" />
                </div>
                <div className="logo_androi">
                  <Image src={logo_androi} alt="" className="logo_mobiles" />
                </div>
              </div>
            </div>

            <div className="reskin_header_content_right">
              <Image
                src={gamespeopledogs}
                alt=""
                className="games_traffic_imgs"
                data-aos="fade-up"
                data-aos-duration="500"
              />
            </div>
          </div>

          <div className="reskin_after">
            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg6}
                alt=""
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">324.56 eTH</h2>
                <p className="reskin_after_p">Random Name</p>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg7}
                alt=""
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">324.56 eTH</h2>
                <p className="reskin_after_p">Random Name</p>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg8}
                alt=""
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">324.56 eTH</h2>
                <p className="reskin_after_p">Random Name</p>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg4}
                alt=""
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">324.56 eTH</h2>
                <p className="reskin_after_p">Random Name</p>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg9}
                alt=""
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom">
                <h2 className="reskin_after_h2">324.56 eTH</h2>
                <p className="reskin_after_p">Random Name</p>
              </div>
            </div>
          </div>

          <div className="solitaire_features">
            <div className="features_h1">
              <h1 className="features_h1_name">Explore Recently listed</h1>
              <h3 className="features_h3_name">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
                <br /> do amet sint. Velit officia consequat.
              </h3>
            </div>

            <div className="features_slider">
              <Slidersoliraite
                image1={slide1}
                image2={slide2}
                image3={slide3}
              />
            </div>
          </div>

          <div className="solitaire_other">
            <div className="other-h1">
              <h1 className="other_h1_name">Explore Recently listed</h1>
              <h3 className="features_h3_name">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
                <br /> do amet sint. Velit officia consequat.
              </h3>
            </div>

            <div className="other_slider">
              <SliderSoliraiteOther />
            </div>
          </div>
        </div>
        <Besidefooter />
      </main>
    </div>
  );
}
