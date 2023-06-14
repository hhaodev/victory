import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo1 from "../public/images/logo1.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    if (pathname === "/") {
      setActiveMenu("");
    } else {
      setActiveMenu(pathname.substr(1));
    }
  }, [router.pathname]);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (
    menuName: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    setActiveMenu(menuName);
    setIsMenuOpen(false);
    router.push("/" + menuName);
  };

  return (
    <nav
      className="navbar aos-init aos-animate"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        className="navbar-header"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <Link href="/">
          <Image src={logo1} alt="Logo" className="navbar-logo" />
        </Link>
          <input type="checkbox" id="checkbox"></input>
          <label onClick={handleMenuToggle} htmlFor="checkbox" className="navbar-toggler">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
      </div>
      <ul
        className={`navbar-nav ${isMenuOpen ? "open" : "close"
          } aos-init aos-animate`}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <li
          className={activeMenu === "" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link href="/" className="nav_li">
            Home
          </Link>
        </li>
        <li
          className={activeMenu === "aboutus" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/aboutus"
            onClick={(event) => handleMenuClick("aboutus", event)}
            className="nav_li"
          >
            About
          </Link>
        </li>
        <li



          className={activeMenu === "game" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/game"
            onClick={(event) => handleMenuClick("game", event)}
            className="nav_li"
          >
            Game
          </Link>
        </li>
        <li
          className={activeMenu === "recruit" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/recruit"
            onClick={(event) => handleMenuClick("recruit", event)}
            className="nav_li"
          >
            Recruit
          </Link>
        </li>
        <li
          className={activeMenu === "contact" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/contact"
            onClick={(event) => handleMenuClick("contact", event)}
            className="nav_li"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
