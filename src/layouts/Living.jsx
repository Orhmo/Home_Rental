import React, { useEffect} from 'react';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css'

import Logo from '../assets/living/1.svg';
import Logo2 from '../assets/living/2.svg';
import Logo3 from '../assets/living/3.svg';
import Logo4 from '../assets/living/4.svg';
import Logo5 from '../assets/living/5.svg';
import Logo6 from '../assets/living/6.svg';
import Pool from '../assets/living/unsplash.svg';

const Living = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const points = [
    {
      id: 1,
      image: Logo,
      des: "Pay as little as possible!",
    },
    {
      id: 2,
      image: Logo2,
      des: "Enjoy wisdom of community",
    },
    {
      id: 3,
      image: Logo3,
      des: "Let's somebody else take care of Landlord!",
    },
    {
      id: 4,
      image: Logo4,
      des: "Enjoy peaceful Environment!",
    },
    {
      id: 5,
      image: Logo5,
      des: "Stay Safe! Save Money!",
    },
    {
      id: 6,
      image: Logo6,
      des: "Pay for what you use !",
    },

  ];

  return (
    <section className="Living">

      <div data-aos="flip-down" data-aos-duration="2000" className="m-8 text-center md:text-start">
        <h1 className="text-black text-2xl font-bold"> <span className="border-b-2 border-[#F4511E]"> Minimum Living Cost </span> Takes Care of Everything</h1>

        <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col md:flex-row">
          <img src={Pool} alt="" className=" w-[80vw] md:w-[35vw]" />

            <div data-aos="fade-left" data-aos-duration="2000" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-16 md:mb-16">
              {points.map(({ id, image, des }) => (
                <div
                  key={id}
                  className="mt-6 w-2/3 flex flex-row md:flex-col items-center mx-auto"
                  >
                    <div className="border-grey-50 border mr-2 w-[24vw] h-[7.5vh] md:w-[65px] md:h-[60px] rounded-lg shadow-gray-300 shadow-xl hover:animate-bounce">
                      <img src={image} className="m-auto mt-3 w-1/2"/>
                    </div>
                    <p className="capitalize font-bold text-sm text-center mt-2 w-full md:mt-4 md:text-base">{des}</p>
                </div>
              ))}
            </div>

          </div>
      </div>
    </section>
  )
}

export default Living;
