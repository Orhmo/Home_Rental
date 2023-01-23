import '../index.css';
import React, { useEffect, Component } from 'react';

import Mapping from '../Components/Mapping';
import Home from '../assets/hero/hero.svg';
import Search from '../assets/hero/search.svg';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css'


const Hero = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <section className="Hero">

      <div className="absolute flex flex-col md:flex-row top-0 left-0 h-screen right-0 bottom-0 bg-black/30 z-2 justify-center md:justify-between">

        <div data-aos="fade-right" data-aos-duration="1500" className="flex justify-center md:justify-between mx-auto text-center w-full md:w-1/2">
          <h1
            className="absolute text-xl text-white text-center font-bold leading-10 tracking-tight [word-spacing:0.2rem] top-24 w-1/2 md:w-[32vw] md:top-64 md:text-[44px] md:text-start md:leading-[50px]"
            >
              The Most Affortable Place To Stay In The San Franciso Bay Area
          </h1>
        </div>

        {/*Google Map*/}
        <div data-aos="zoom-in" className="justify-center mx-auto w-[80vw] md:w-[30vw] mt-60 md:mt-52 rounded-lg">
          <Mapping/>

          <div className="bg-white border-solid border-[#E6E6E6] rounded-[10px] py-2">
                {/* First Select */}
                <div className="">
                  <form
                    action=""
                    className="flex lg:px-4"
                  >
                    <select
                      name="input4"
                      id=""
                      className=" bg-[#F9F9F9] border-2  border-[#E6E6E6] rounded-tl-[5px] rounded-bl-[5px] px-3  md:px-5 py-[11px]  font-medium text-[#252B42]"
                    >
                      <option value="">All Type</option>
                    </select>

                    {/* Second select */}

                    <select
                      name="input4"
                      id=""
                      className=" bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] px-1 md:px-12 py-[11px]  font-medium text-[#252B42]"
                    >
                      <option value="">Neighborhood</option>
                    </select>
                    <button className="bg-[#23A6F0] border border-solid border-[#E6E6E6] rounded-tr-[5px] rounded-br-[5px] py-4 px-4">
                      <img src={Search} alt="" />
                    </button>
                  </form>
                </div>
              </div>
        </div>

      </div>

    </section>

  )
}


export default Hero;
