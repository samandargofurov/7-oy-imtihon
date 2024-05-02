import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { RxTwitterLogo } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import img from "../assets/audiophile.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#141414]">
        <div className="container w-[1109px] mx-auto">
          <div className="flex justify-between items-start pt-[75px] pb-12">
            <div className="flex flex-col gap-14 text-white">
              <div className="flex flex-col gap-9">
                <NavLink to='/'><img src={img} alt="" width={143} height={25} /></NavLink>
                <p className="opacity-60 w-[490px] text-sm">
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week.
                </p>
              </div>
              <p className="opacity-55">Copyright 2021. All Rights Reserved</p>
            </div>
            <div className="flex flex-col gap-36">
              <div className="navbar-center">
                <ul className="flex gap-10 text-sm text-white">
                  <li className="hover:text-[#D87D4A]">
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li className="hover:text-[#D87D4A]">
                    <NavLink to="/headphones">HEADPHONES</NavLink>
                  </li>
                  <li className="hover:text-[#D87D4A]">
                    <NavLink to="/speakers">SPEAKERS</NavLink>
                  </li>
                  <li className="hover:text-[#D87D4A]">
                    <NavLink to="/earphones">EARPHONES</NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex justify-end items-center gap-7">
                <span className="text-white text-[26px] hover:text-[#D87D4A] cursor-pointer"><ImFacebook2></ImFacebook2></span>
                <span className="text-white text-3xl hover:text-[#D87D4A] cursor-pointer"><RxTwitterLogo></RxTwitterLogo></span>
                <span className="text-white text-[28px] hover:text-[#D87D4A] cursor-pointer"><FaInstagram></FaInstagram></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
