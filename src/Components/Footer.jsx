import React, { useEffect } from "react";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css'

import Logo from '../assets/hero/logo.svg';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { AiFillPrinter, AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram, AiOutlineGooglePlus, AiOutlineWifi } from "react-icons/ai";

const Footer = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="Footer">
    <div data-aos="flip-down" data-aos-duration="1000" className="px-12 md:px-24">

      <div className="mt-24 border-t border-[#F4551E] py-20 mx-auto">

        <div className="flex flex-col md:flex-row justify-center md:justify-around">
          <div className="align-center justify-center items-center text-center">
            <img src={Logo} alt="" className="h-32 w-32 md:h-48 md:w-48 rounded-full bg-[#F4551E] fill-current"/>
          </div>

            {/*Address*/}
              <div className="mt-8 flex flex-col gap-y-4 mb-8 w-fit">
                <p className="flex gap-2 items-center">
                  <MdLocationPin className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125" />
                  345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </p>
                <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center">
                  <p className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-[#F4551E] text-xl hover:text-[#F97316] hover:scale-125" />
                    (123) 456-7890
                  </p>
                  <p className="flex gap-2 items-center">
                    <AiFillPrinter className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125" />
                    (123) 456-7890
                  </p>
                </div>

              {/*Socials*/}
              <div className="flex flex-col md:flex-row gap-x-6 ">
                <span className="mb-2 md:mb-0 ">Social Media</span>
                <div className="flex gap-2 md:gap-4">
                  <a href="" className=""><AiFillFacebook className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><AiOutlineTwitter className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><FaLinkedinIn className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><AiFillYoutube className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><AiOutlineInstagram className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><AiOutlineGooglePlus className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><BsPinterest className="text-[#F4551E] text-2xl hover:text-[#F97316] hover:scale-125"/></a>
                  <a href=""><AiOutlineWifi  className="text-[#F4551E] text-2xl rotate-45 hover:text-[#F97316] hover:scale-125"/></a>
                </div>
              </div>

          </div>
        </div>

      </div>

      <div className="border-t border-[#7BB9FC] mx-8 mb-8">
        <div className="flex flex-col md:flex-row md:gap-y-4 justify-center md:justify-between items-center mt-8">
          <ul className="flex uppercase text-xs md:text-sm text-gray-500 ">
            <li className="m-2 hover:text-[#F4551E]">About us</li>
            <li className="m-2 hover:text-[#F4551E]">Contact us</li>
            <li className="m-2 hover:text-[#F4551E]">Help</li>
            <li className="m-2 hover:text-[#F4551E]">Privacy policy</li>
            <li className="m-2 hover:text-[#F4551E]">Disclaimer</li>
          </ul>
          <span className="text-center text-gray-500 ">Copyright &copy; 2020 Minimumlivingcost. All rights reserved</span>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Footer;
