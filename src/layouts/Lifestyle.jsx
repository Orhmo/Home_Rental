import React, { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css'

import One from '../assets/lifestyle/1.svg';
import Two from '../assets/lifestyle/2.svg';
import Three from '../assets/lifestyle/3.svg';
import Four from '../assets/lifestyle/4.svg';



const Lifestyle = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (

    <section className="">
    {/*Lifestyle*/}
    <div className="p-8 pt-16 md:px-32 mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-8">
      {/*Masonry*/}
      <div data-aos="fade-left" data-aos-duration="2000"className="w-full md:w-[540px] md:h-1/2">
           <Masonry
              columnsCount={2}
              gutter="8px md:2px"
              >
             <div className="relative md:top-6 ">
                <img src={One} alt="" className="hover:scale-90"/>
                <p class="absolute top-6 md:text-xl text-center font-semibold text-white capitalize left-6 md:left-12">flexible leases</p>
              </div>
              <div className="relative">
                <img src={Two} alt="" className="pt-12 md:pt-24 hover:scale-90"/>
                  <p class="absolute top-16 md:top-32 md:text-xl text-center font-semibold text-white capitalize">7-Day happiness guaranteed</p>
              </div>
            </Masonry>
            <div
              className="flex gap-4 mt-2 md:mt-4"
               >
              <div className="relative">
                <img src={Three} alt="" className="w-[60vw] hover:scale-90"/>
                  <p class="absolute top-6 text-sm md:text-xl text-center font-semibold text-white capitalize ">Monthly house cleaning</p>
              </div>
              <div className="relative">
                <img src={Four} alt="" className="w-[95vw] hover:scale-90"/>
                  <p class="absolute top-6 md:text-2xl md:m-4 text-center font-semibold text-white capitalize ">choose your own roommate</p>
              </div>
            </div>

        </div>

      {/*Lifestyle content*/}
      <div data-aos="fade-right" data-aos-duration="2000" className="pt-24 px-8 md:pt-48 md:w-4/5">
        <h2 className="text-2xl md:text-3xl font-bold pb-4">
          Flexibility and options to suit your lifestyle.
        </h2>
        <p className="text-xs md:text-base">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective roommate finder option.
          We provide you the flexibility that you most desire.
        </p>
        <button className=" border-2 px-4 py-2 rounded-lg mt-4 bg-[#F4511E] hover:bg-[#F97316] text-sm text-white">
          Search Rooms
        </button>
      </div>
    </div>
    </section>
  )
}

export default Lifestyle;
