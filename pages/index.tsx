import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import line from "../public/images/Line .png";
import outgames1 from "../public/images/outgames-img1.png";
import outgames2 from "../public/images/outgames-img2.png";
import outgames3 from "../public/images/outgames-img3.png";
import outgames4 from "../public/images/outgames-img4.png";
import farm from "../public/images/home_aboutus_three.png";
import SliderHomeRecruit from "@/components/Sliderhomerecruit";
import allboximg1 from "../public/images/home_news_img1.png";
import allboximg2 from "../public/images/home_news_img2.png";
import allboximg3 from "../public/images/home_news_img3.png";
import allboximg4 from "../public/images/home_news_img4.png";
import allboximg5 from "../public/images/home_news_img5.png";
import allboximg6 from "../public/images/home_news_img6.png";
import Besidefooter from "@/components/Besidefooter";
import homechil1 from "../public/images/fireman.png";
import homechil2 from "../public/images/nurse.png";
import homechil3 from "../public/images/police.png";
import homechil4 from "../public/images/pilot.png";
import homechil5 from "../public/images/workderman.png";
import homemother1 from "../public/images/home_headings_img1.png";
import homemother2 from "../public/images/home_headings_img2.png";
import homemother3 from "../public/images/home_headings_img3.png";
import homemother4 from "../public/images/home_headings_img4.png";
import homeheadingbanner1 from "../public/images/home_headings_banner1.png";
import homeheadingbanner2 from "../public/images/home_headings_banner2.png";
import homeheadingbanner3 from "../public/images/home_headings_banner3.png";
import homeheadingbanner4 from "../public/images/home_headings_banner4.png";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import homeaboutus from "../public/images/home_aboutus_background.png";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const backgroundImages = [
    { title: "Traffic Reskin", img: homemother1, banner: homeheadingbanner1 },
    { title: "Traffic Basic", img: homemother2, banner: homeheadingbanner2 },
    { title: "Solitaire", img: homemother3, banner: homeheadingbanner3 },
    { title: "Farm Jam", img: homemother4, banner: homeheadingbanner4 },
  ];

  const changeSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  const handleSlideChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Header />
      <main>
        <Navbar />

        <div className="home_headings">
          <Image
            src={backgroundImages[currentImageIndex].banner}
            alt=""
            className="home_headings_imgs"
          />
          <div className="home_familys">
            <div className="home_headings_child">
              <Image
                src={homechil1}
                alt=""
                className="home_headings_child1"
                data-aos="fade-left"
                data-aos-delay="400"
              />
              <Image
                src={homechil2}
                alt=""
                className="home_headings_child1"
                data-aos="fade-left"
                data-aos-delay="300"
              />
              <Image
                src={homechil3}
                alt=""
                className="home_headings_child1"
                data-aos="fade-up"
                data-aos-duration="500"
              />
              <Image
                src={homechil4}
                alt=""
                className="home_headings_child1"
                data-aos="fade-right"
                data-aos-delay="300"
              />
              <Image
                src={homechil5}
                alt=""
                className="home_headings_child1"
                data-aos="fade-right"
                data-aos-delay="400"
              />
            </div>

            <div
              className="home_headings_mother"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {backgroundImages.map((data, index) => (
                <div
                  className={`home-headings_mother1 ${
                    index === currentImageIndex ? "active" : " "
                  }`}
                  key={index}
                  onClick={() => handleSlideChange(index)}
                >
                  <Image
                    src={data.img}
                    alt="#"
                    className="home_headings_mother1_imgs"
                  />
                  <p className="home_headings_mother1_p">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home_outgames">
          <div className="home_outgames_heading">
            <h2 className="home_outsgames_h2">Our Game</h2>
            <Image src={line} alt="" className="home_outgames_line" />
          </div>

          <div className="home_outgames_ends">
            <div className="home_outgames_ends1">
              <div
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames1}
                  alt=""
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">traffic basic</h2>
                  <p className="box1_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>

              <div
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames2}
                  alt=""
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">traffic reskin</h2>
                  <p className="box1_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>

            <div className="home_outgames_ends2">
              <div
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames3}
                  alt=""
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">solitaire</h2>
                  <p className="box1_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>

              <div
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames4}
                  alt=""
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">Farm Jam</h2>
                  <p className="box1_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="home_outgames_button">
            <button className="outgames_buttons">Load More</button>
          </div>
        </div>

        <div className="home_aboutus" data-aos="fade-up" data-aos-delay="100">
          <div className="home_aboutus_backgrounds">
            <div className="home_aboutus_right">
              <Image
                src={homeaboutus}
                alt=""
                className="home_about_rights_images"
              />
            </div>
            <div className="home_aboutus_left">
              <h2 className="home_aboutus_left_h2">About us </h2>
              <p className="home_aboutus_left_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>

            {/* <div className="home_aboutus_right">
              <Image src={farm} alt="" className="home_aboutus_farm" />
            </div> */}
          </div>
        </div>

        <div className="home_recruit">
          <div className="home_recruit_headings">
            <div className="home_outgames_heading">
              <h2 className="home_outsgames_h2">Recruit</h2>
              <Image src={line} alt="" className="home_outgames_line" />
            </div>
          </div>

          <div
            className="home_recruit_slider"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SliderHomeRecruit />
          </div>
        </div>

        <div className="home_whatnews">
          <div className="home_whatnews_headings">
            <div className="home_outgames_heading">
              <h2 className="home_outsgames_h2">What new?</h2>
              <Image src={line} alt="" className="home_outgames_line" />
            </div>
          </div>

          <div className="home_whatnews_allbox">
            <div
              className="home_whatnew_box1_flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image src={allboximg1} alt="" className="home_whatnews_box1" />
              <div className="home_whatnews_form1">
                <Image
                  src={allboximg4}
                  alt=""
                  className="home_whatnews_img_icons"
                />
                <div className="home_whatnews_box1_content">
                  <h3 className="home_whatnews_box1_content_h2">
                    Subscribe To Our Newsletter Twith StreamersAre Gaming The
                    Systerm With
                  </h3>
                  <p className="home_whatnews_box1_content_p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="home_whatnews_flex2">
              <div
                className="home_whatnews_box2_flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={allboximg2} alt="" className="home_whatnews_box1" />
                <div className="home_whatnews_form2">
                  <Image
                    src={allboximg5}
                    alt=""
                    className="home_whatnews_img_icons"
                  />
                  <div className="home_whatnews_box1_content1">
                    <h3 className="home_whatnews_box2_content_h2">
                      Subscribe To Our Newsletter Twith StreamersAre Gaming The
                      Systerm With
                    </h3>
                    <p className="home_whatnews_box2_content_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="home_whatnews_box3_flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={allboximg3} alt="" className="home_whatnews_box1" />
                <div className="home_whatnews_form3">
                  <Image
                    src={allboximg6}
                    alt=""
                    className="home_whatnews_img_icons"
                  />
                  <div className="home_whatnews_box1_content1">
                    <h3 className="home_whatnews_box2_content_h2">
                      Subscribe To Our Newsletter Twith StreamersAre Gaming The
                      Systerm With
                    </h3>
                    <p className="home_whatnews_box2_content_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_whatnews_buttons">
            <button className="outgames_buttons">Load More</button>
          </div>
        </div>

        <div className="home_footer">
          <Besidefooter />
        </div>
      </main>
    </div>
  );
}
