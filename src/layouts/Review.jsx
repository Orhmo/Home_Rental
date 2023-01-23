import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import one from '../assets/reviews/1.svg';
import quotes from '../assets/reviews/quotes.svg';
import Carousel from 'react-bootstrap/Carousel';

const Review = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const reviews= [
    {
      id:1,
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
      name:"Harry Wilson",
      role:"Property Owner"
    },
    {
      id:2,
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
      name:"Hilary Jackson",
      role:"Property Owner"
    },
    {
      id:3,
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
      name:"Jennifer Handerson",
      role:"Property Owner"
    },
  ]

  return (
    <section className="Review">
    {/*Testimonials*/}
      <div className="bg-[#fff7ed] grid grid-cols-1 md:grid-cols-2 gap-24 p-12 md:p-0">
        <div className="Testimonials pt-4 md:px-12 py-0 md:py-16">
          <div className="comma left-10 md:left-8 absolute">
            <img src={quotes} alt="" className="fill-[#fff7ed]" />
          </div>
          <div
            data-aos="fade-right" data-aos-duration="2000"
            className="review">
          <div style={{ display: 'block', width: 700, padding: 30 }}>
        <Swiper
            pagination={{
              dynamicBullets: true,
              bulletClass: `swiper-pagination-bullet`,
            }}
            modules={[Pagination]}
          >
            {reviews.map (({id, review, name, role}) => (
            <SwiperSlide>
              <div key={id} className="md:text-left text-[14px] md:text-[16px] lg:text-[18px] w-[90vw] md:w-[46vw]">
                <div>
                  <p className="relative top-0 pr-16 md:pr-0 leading-10 ">
                    {review}
                  </p>
                </div>
                <div className="user w-full flex mob:justify-center md:justify-start items-center gap-x-2 mt-4">
                  <img
                    src={one}
                    alt=""
                    className="w-[40px] h-[40px] rounded-[50%] bg-white"
                  />
                  <div className="mb-4">
                    <p className="name text-[#F4551E] font-semibold">{name}</p>
                    <span className="">{role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
            </Swiper>
          </div>
          </div>
        </div>
        <div className="agency-video">
        <div
          data-aos="fade-left" data-aos-duration="2000"
          className="right w-80vw h-50vh mx-auto">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/QDk_bJh4bpk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
        </div>
        </div>
      </div>

    </section>
  )
}

export default Review;
