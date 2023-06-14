import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.png";
import hiring from "../../public/images/cruit.png";
import Sliderabout from "@/components/Sliderabout";
import Besidefooter from "@/components/Besidefooter";
import Header from "@/components/Header";

export interface RecruitProps {}

export default function Recruit(props: RecruitProps) {
  return (
    <div>
      <Header/>
      <main>
        <Navbar />
        <div className="header_home">
          <div className="header_name1">
            <h1 className="header_achieve">Achieve</h1>
          </div>
          <div className="header_name1">
            <h1 className="header_together">
              T<Image src={logo} alt="" className="header_image"></Image>gether
            </h1>
          </div>
          <div className="header_create">
            <h2 className="header_greate">great products are created</h2>
            <br />
            <h2 className="header_by">by great teams</h2>
          </div>
          <div className="header_button">
            <button className="header_joinus">Join Us</button>
          </div>
        </div>

        <div className="recruit_hiring">
          <div
            className="recruit_hiring_img aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image src={hiring} alt="" className="recruit_hiring_imgs"/>
          </div>

          <div
            className="recruit_hiring_slider aos-init aos-animate"
            data-aos="zoom-in"
          >
            <Sliderabout />
          </div>
        </div>

        <div className="recruit_text1">
          <div
            className="recruit_great aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h4 className="recruit_h4">Great products are created</h4>
          </div>

          <div
            className="recruit_p aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <p className="recruit_lorem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="recruit_form_help">
          <div
            className="recruit_form aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <div className="recruit_form_h1">
              <h1 className="recruit_doyou">Do you need help with the game?</h1>
            </div>

            <div className="recruit_form_p">
              <p className="recruit_form_lorem1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="recruit_form_butotn">
              <button className="recruit_button_support">Support</button>
            </div>
          </div>
        </div>

        <Besidefooter/>
      </main>
    </div>
  );
}
