import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import "../index.css"

import Paginate from '../Components/Paginate';
import { propertiesList } from '../Components/propertiesList';

import Bed from '../assets/size/Bed.svg';
import Shower from '../assets/size/Shape.svg';
import Size from '../assets/size/Size.svg';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Properties = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  {/*pagination*/}
  const [properties, setProperties] = useState(propertiesList);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertyPerPage] = useState(6);

  {/*Currently Shown Properties*/}
  const indexOfLastProperty = currentPage * propertyPerPage;
  const indexOfFirstProperty = indexOfLastProperty -  propertyPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(propertiesList.length / propertyPerPage);

  {/*Pagination Animation on button click*/}
  const [isAnimating, setIsAnimating] = useState(true);
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    setIsAnimating(true);
  }, [currentPage]);


  return (
    <section className="Properties">

      <div data-aos="flip-up" className="m-0 p-8 mt-16 bg-[#F5F5F5]">

        <div className="flex justify-between mb-8">
          <h1 className="capitalize text-black text-lg md:text-2xl font-bold"> <span className="border-b-2 border-[#F4511E]"> List </span>of properties</h1>
          <button className="text-[10px] md:text-xs text-white bg-[#F4511E] hover:bg-[#F97316] p-2 md:p-3">
            View All Property
          </button>
        </div>

        {/*Properties List*/}

        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 items-center my-10">
          {
            currentProperties.map((property) => (
              <div className={`mx-auto justify-center ${isAnimating ? 'slide-in' : ''}`} onAnimationEnd={handleAnimationEnd} key={property.id}>
              {/*Property Image*/}
                <div className="w-full md:w-[25vw] cursor-pointer box duration-200 hover:scale-90 rounded-tl-3xl rounded-tr-3xl justify-center">
                  <img src={property.src} alt="" className="rounded-tl-3xl rounded-tr-3xl h-[282px] "/>
                </div>

                <div className=" border-1 rounded-b-3xl shadow-2xl w-full">
                  {/*Content*/}
                  <div className="p-4">
                    <div className="text-sm font-bold mb-4">{property.address}</div>
                    <div className="text-xs text-gray-400">{property.roomType}</div>
                    <div className="text-md font-bold text-[#F4511E]">{property.rent}</div>
                  </div>
                  {/*Property Size*/}
                  <div className="flex justify-between justify-center border-t-2">
                    <div className="flex p-2 border-r-2 w-full gap-x-2 justify-center ">
                      <img src={Bed} alt="" />
                      <p className="p-2 text-lg font-bold">{property.bed}</p>
                    </div>
                    <div className="flex p-2 border-r-2 w-full gap-x-2 justify-center ">
                    <img src={Shower} alt="" />
                    <p className="p-2 text-lg font-bold">{property.shower}</p>
                  </div>
                  <div className="flex p-2 w-full gap-x-2 justify-center ">
                    <img src={Size} alt="" />
                    <p className="p-2 text-lg font-bold">{property.size} </p>
                  </div>
                </div>
              </div>
            </div>


          ))}
          {/*Properties Navigation*/}
          <div

            className="justify-center mx-auto md:mx-40 lg:mx-96 lg:px-40">
          <Paginate
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
             />
             </div>
        </div>


      </div>

    </section>
  )
}

export default Properties;
