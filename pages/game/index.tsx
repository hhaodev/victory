import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Besidefooter from "@/components/Besidefooter";
import gamescontrollers from "../../public/images/games_controller.png";
import gamesthree from "../../public/images/games_three_people.png";
import gamespeopledogs from '../../public/images/games_people_dogs.png'
import gamesfivepeople from "../../public/images/games_five_people..png";
import gameline from "../../public/images/Line .png";
import Header from "@/components/Header";

export interface AboutUsProps { }

export default function AboutUs(props: AboutUsProps) {

  const [text, setText] = useState('');


  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;
    const words = ['Game is my life', 'GameTamin ...'];
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
                }, 50);
              }
            }, 1000);
          } else {
            currentWord = word.slice(0, currentWord.length + 1);
            setText(currentWord);
          }
        }, 50);
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
        <div
          className="games_controllers"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src={gamescontrollers}
            alt=""
            className="games_controllers_images"
          />
          <h1 className="games_controllers_h1">{text}</h1>
        </div>

        <div className="game_traffic">
          <div className="traffic_colum1">
            <div
              className="traffic_content_1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <Image src={gameline} alt="" className="games_traffic_lines"/> */}
              <div className="traffic_content_title_1">TRAFFIC RESKIN</div>
              <p className="traffic_content_context_1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
              <Link href="/game/reskin">
                <button className="outgames_buttons">Load More</button>
              </Link>
            </div>
            <div className="traffic_figure_1">
              <Image
                src={gamesfivepeople}
                alt=""
                className="games_traffic_imgs"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
          </div>

          <div className="traffic_colum2">
            <div className="traffic_figure_2">
              <Image
                src={gamespeopledogs}
                alt=""
                className="games_traffic_imgs"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="traffic_content_1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <Image src={gameline} alt="" className="games_traffic_lines"/> */}
              <div className="traffic_content_title_1">TRAFFIC BASIC</div>
              <p className="traffic_content_context_1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
              <Link href="/game/basic">
                <button className="outgames_buttons">Load More</button>
              </Link>
            </div>
          </div>

          <div className="traffic_colum3">
            <div
              className="traffic_content_1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <Image src={gameline} alt="" className="games_traffic_lines"/> */}
              <div className="traffic_content_title_1">SOLITAIRE</div>
              <p className="traffic_content_context_1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
              <Link href="/game/solitaire">
                <button className="outgames_buttons">Load More</button>
              </Link>
            </div>
            <div className="traffic_figure_3">
              <Image
                src={gamesthree}
                alt="fireman"
                className="games_traffic_imgs"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
          </div>

          <div className="traffic_colum4">
            <div className="traffic_figure_1">
              <Image
                src={gamesthree}
                alt=""
                className="games_traffic_imgs"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="traffic_content_1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <Image src={gameline} alt="" className="games_traffic_lines"/> */}
              <div className="traffic_content_title_1">FARM JAM</div>
              <p className="traffic_content_context_1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
              <Link href="/game/farmjam">
                <button className="outgames_buttons">Load More</button>
              </Link>
            </div>
          </div>
        </div>

        <Besidefooter />
      </main>
    </div>
  );
}
