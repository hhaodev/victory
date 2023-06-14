import React from "react";
import line2 from "../public/images/Line2.png";
import Image from "next/image";
import besidelogo from "../public/images/logo1.png";
import Link from "next/link";

export interface BesidefooterProps {}

export default function Besidefooter(props: BesidefooterProps) {
  return (
    <div className="besidefooter">
      <Image src={line2} alt="" className="besidefooter_line_imgs" />
      <div className="beside_form">
        <div className="beside_form1">
          <Image src={besidelogo} alt="" />
          <div className="besideform_p">
            <p className="">
              Gametamin is a Singapore based company – a game maker studio
              specializing in designing and producing mobile games.
            </p>
          </div>
        </div>

        <div className="beside_form2">
          <h4 className="beside_form2_h4">COMPANY</h4>
          <Link href="/contact">
            <p className="beside_form2_p">Contact</p>
          </Link>
          <Link href="/terms">
            {" "}
            <p className="beside_form2_p">Terms</p>
          </Link>
          <Link href="/privacy">
            <p className="beside_form2_p">Privacy</p>
          </Link>
        </div>

        <div className="beside_form3">
          <input
            type="text"
            placeholder="Email"
            className="beside_form3_input"
          />
          <button className="beside_form3_buttons">Subscribe</button>
        </div>
      </div>

      <div className="beside_footer_finallys">
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
        <h1 className="beside_footer_finally_h1">Victory</h1>
      </div>
    </div>
  );
}
