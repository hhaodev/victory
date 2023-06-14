import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import contactcar from "../../public/images/contact-car.png";
import { useRef } from "react";
import cowboys from "../../public/images/contact-caoboi.png";
import address from "../../public/images/contact-address.png";
import youtube1 from "../../public/images/contact-youtube1.png";
import facebook from "../../public/images/contact-facebook1.png";
import gmail from "../../public/images/contact-gmail.png";
import Link from "next/link";
import Besidefooter from "@/components/Besidefooter";
import contactmaps from "../../public/images/contact_imgs_maps.png";
import contactlogo from "../../public/images/logo.png";
import contactvjctory from "../../public/images/contact_imgs_vjctory.png";
import Header from "@/components/Header";

export interface ContactProps { }

export default function Contact(props: ContactProps) {

  const [text, setText] = useState('');


  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;
    const words = ['victory company'];
    const animateText = () => {
      if (isMounted) {
        const word = words[currentIndex];
        let currentWord = '';

        const typingInterval = setInterval(() => {
          if (currentWord.length === word.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              if (isMounted) {
                const deletingInterval = setInterval(() => {
                  if (currentWord.length === 0) {
                    clearInterval(deletingInterval);
                    currentIndex = (currentIndex + 1) % words.length;
                    animateText();
                  } else {
                    currentWord = currentWord.slice(0, -1);
                    setText(currentWord);
                  }
                }, 100);
              }
            }, 1000);
          } else {
            currentWord = word.slice(0, currentWord.length + 1);
            setText(currentWord);
          }
        }, 100);
      }
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Navbar />

        <div className="contact_maps">
          <div
            className="contact_maps_left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image src={contactmaps} alt="" className="contact_maps_imgs" />
            <div className="contact_logo_maps">
              <Image src={contactlogo} alt="" className="contact_imgs_logo" />
              <Image
                src={contactvjctory}
                alt=""
                className="contact_imgs_vjctory"
              />
            </div>
          </div>

          <div
            className="contact_maps_right"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact_maps_right_companys">
              <h2 className="contact_maps_right_h2">{text}</h2>
            </div>

            <div className="contact_maps_right_address">
              <h4 className="contact_maps_right_address_h4">Address:</h4>
              <p className="contact_maps_right_address_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet
              </p>
            </div>

            <div className="contact_maps_right_address">
              <h4 className="contact_maps_right_address_h4">Telephone:</h4>
              <p className="contact_maps_right_address_p">+(89) 02189382321</p>
              <p className="contact_maps_right_address_p">+(89) 02378236899</p>
            </div>

            <div className="contact_maps_right_address">
              <h4 className="contact_maps_right_address_h4">Address:</h4>
              <p className="contact_maps_right_address_p">
                +(89) 021893823219548
              </p>
            </div>
          </div>
        </div>

        <div className="contact-infor-section">
          <div
            className="contact-card aos-init"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Facebook</p>
              <Link
                href={"https://www.facebook.com/gametaminsg"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt=""></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Youtube</p>
              <Link
                href={
                  "https://www.youtube.com/channel/UCtqfA-BZLIcD2ouxgPlJPdg"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtube1} alt=""></Image>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="contact-card aos-init"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Address</p>
              <Link
                href={
                  "https://www.google.com/maps/place/Peninsula+Plaza+Singapore/@1.2923461,103.8486939,17z/data=!3m2!4b1!5s0x31da18475cfdd08b:0xbd1bedb2d3c0421f!4m5!3m4!1s0x31da19a1350d10f1:0xe471fd72f9ffcba1!8m2!3d1.2923407!4d103.8508826"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={address} alt=""></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card clickable-area aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Email</p>
              <Link
                href={"https://mail.google.com/mail/u/0/#inbox"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={gmail} alt=""></Image>
              </Link>
            </div>
          </div>
          <Image className="character" src={cowboys} alt=""></Image>
        </div>

        {/* <div ref={licensingRef} className="contact_licensing">
                    <Image src={licensing} alt="" className="contact_img1" />
                </div> */}

        <div className="contact_form">
          <div
            className="form_contact aos-init aos-animate"
            data-aos="fade-right"
          >
            <div className="form_heading">
              <div className="form_name1">
                <h2
                  className="form_name1_h2 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Do you need help with the game?
                </h2>
                <p
                  className="form_name1_p aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="form_image1">
                <Image
                  src={contactcar}
                  alt=""
                  className="contact_car aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div
              className="form_button aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <input
                placeholder="Email"
                type="text"
                className="form_button_input"
              />
              <button className="form_button_btn">Send</button>
            </div>
          </div>
        </div>
        <Besidefooter />
      </main>
    </div>
  );
}
