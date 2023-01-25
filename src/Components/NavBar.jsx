
import '../index.css';
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/hero/logo.svg';


const NavBar = () => {

  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const pathname = window.location.pathname;
    links.forEach(link => {
      if (link.to === pathname) {
        setActive(link.id);
      }
    });
  }, []);

  const links = [
    {
      id: 1,
      to:"/",
      link: "home",
    },
    {
      id: 2,
      to:"/landloards",
      link: "landloard",
    },
    {
      id: 3,
      to:"/tenants",
      link: "tenants",
    },
    {
      id: 4,
      to:"/contact-us",
      link: "Contact Us",
    },

  ];
  return (
  <section className="NavBar">
  <div className=" items-center mx-auto z-10">
   <div className="absolute flex justify-between items-center p-3 border-b mx-[10%] w-[80vw] top-2 z-10">
    {/*Website Logo*/}
      <div>
        <Link to="/">
          <img src={Logo} alt="" className="w-2/3 md:w-full"/>
        </Link>
      </div>

     {/*Navbar Items*/}
     <div className="hidden md:flex">
       <ul className="flex items-center space-x-12 text-white capitalize cursor-pointer mr-72">
         {links.map(({ id, to, link }) => (
           <li
             key={id}
             onClick={() => setClick(id)}
           >
             <NavLink
               onClick={() => setNav(!nav)}
               to={to}
               smooth
               duration={500}
               className={`px-2 hover:border-b-2 hover:border-white hover:pb-[24px] ${active === id ? 'active' : ''}`}
               activeClassName="active"
             >
               {link}
             </NavLink>
           </li>
         ))}
       </ul>
      </div>


      {/*Mobile menu button*/}
     <div
       onClick={() => setNav(!nav)}
       className="flex cursor-pointer pr-4 z-10 text-white md:hidden lg:hidden"
       >
       {nav ? <FaTimes size={20} /> : <FaBars size={20}/>}
   </div>
   {nav && (
     <ul className="flex flex-col absolute top-2 buttom-0 right-0 w-1/2 md:w-[20vw] h-screen z-1 text-black md:hidden lg:hidden">
       {links.map(({ id, to, link }) => (
         <li
           key={id}

         >
           <Link
             onClick={() => setNav(!nav)}
             to={to}
             smooth
             duration={500}
             className="no-underline flex flex-row px-4 pr-4 cursor-pointer capitalize py-6 text-md text-white bg-[#F4551E] w-full  hover:text-[#F4551E] hover:bg-white"
           >
             {link}
           </Link>
         </li>
       ))}


     </ul>
   )}


   </div>
</div>
</section>
 )
}
export default NavBar;
