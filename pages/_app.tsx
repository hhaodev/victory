import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/sliderhomerecruit.css";
import "../styles/game.css";
import "../styles/slidersoliraite-features.css";
import "../styles/besidefooter.css";
import "../styles/about.css";
import "../styles/boxicons.css";
import "../styles/reskin.css";
import "../styles/contact.css";
import "../styles/terms.css";
import "../styles/privacy.css";
import "../styles/recruit.css";
import "../styles/sliderabout.css";
import "../styles/sliderevent.css";
import "aos/dist/aos.css";
import AOS, { AosOptions } from "aos";
import { useEffect } from "react";
import "../styles/solitaire.css";
import "../styles/basic.css";

export default function App({ Component, pageProps }: AppProps) {
  setTimeout(function () {
    AOS.refresh();
  }, 100);

  useEffect(() => {
    initAOS({
      duration: 800,
      easing: "ease-out",
      once: false,
      delay: 100,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  function initAOS(options?: AosOptions) {
    AOS.init(options);
    AOS.refreshHard();
  }
  return <Component {...pageProps} />;
}
