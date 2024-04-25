import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./../assets/logo4.png";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrolledPixels = window.scrollY;
      const scrollThreshold = 200; // Adjust this value as needed

      if (scrolledPixels > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`not-selectable h-20 sc w-full top-0 left-0 right-0 bg-white flex justify-between items-center p-1  z-50  ${scrolled ? "fixed shadow-md" : ""
      }`}
      style={{
        transition: "all 0.5s ease",
      }}
    >
      <a href="#home">
        <img
          src={logo}
          alt="image"
          height={100}
          width={110}
          className="mt-3 ml-2 md:mt-4 mb-4 md:ml-12 w-20 md:w-32 h-20  object-cover filter invert"
          draggable={false}
        />
      </a>
      <div>
        <ul className="hidden font-bold font-times md:flex">
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home">Home</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#aboutme">About Me</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#companies">Companies</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#contact">Contact Us</a>
          </li>
        </ul>
        {/* <img src={logo} className="sm:hidden w-[40px] h-[40px]" /> */}
        <div className="flex flex-col  items-end">
          {!toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => setToggle(!toggle)}
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 cursor-pointer md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg> : <svg onClick={() => setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          }

          {toggle ?
            <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
              <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                <a href="/#home">Home</a>
              </li>
              <li className="menuItem  p-3 hover:scale-110">
                <a href="/#aboutme">About Me</a>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                <a href="/#skills">Skills</a>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                <a href="/#companies">Companies</a>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                <a href="/#contact">Contact Us</a>
              </li>
            </ul> : null}
        </div>
        {/* <ul className={!toggle?'hidden':'flex'}>
                LOGO
            </ul> */}
      </div>
    </div>
  );
};

export default NavBar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
// import logo from "./../assets/logo.png";
// // import Home from "./../assets/Home.gif";
// import {
//   IoMdHome,
//   IoMdClose,
//   IoMdInformationCircle,
//   IoIosChatbubbles,
//   IoIosLogIn,
// } from "react-icons/io";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleSidebar = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolledPixels = window.scrollY;
//       const scrollThreshold = 200; // Adjust this value as needed

//       if (scrolledPixels > scrollThreshold) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <nav
//         className={`not-selectable sc w-full top-0 left-0 right-0 bg-black  flex justify-between items-center p-1 text-white z-50  ${scrolled ? "fixed shadow-md" : ""
//           }`}
//         style={{
//           transition: "all 0.5s ease",
//         }}
//       >
// <a href="#home">
//   <img
//     src={logo}
//     alt="image"
//     height={100}
//     width={110}
//     className="mt-3 ml-2 md:mt-4 mb-4 md:ml-12 filter invert"
//     draggable={false}
//   />
// </a>


//         <div className="hidden md:flex container mx-auto">
//           <ul className="flex mx-auto gap-7">
//             <li>
//               <a
//                 href="#home"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b>Home </b>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#project"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b>Project</b>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b>Experience </b>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b>Contact </b>
//               </a>
//             </li>
//           </ul>
//           {/* <div className="mr-9">
//             <button className="text-white rounded-full hover:bg-red-600  border border-red-500  hover:border-red-50 hover:scale-110 hover:delay-300">
//               Get in Touch
//             </button>
//           </div> */}
//           <div className="mr-9 flex gap-5">
//             <a href="https://www.instagram.com/susant_37?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
//               <FiInstagram />
//             </a>
//             <a href="https://github.com/Susant37" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
//               <FiGithub />
//             </a>
//             <a href="https://www.linkedin.com/in/susanta37" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
//               <FiLinkedin />
//             </a>
//           </div>


//         </div>
//         <div className="md:hidden">
//           <FiMenu
//             className="text-white hover:text-red-600 hover:no-underline ml-2 mr-5 cursor-pointer"
//             size={24}
//             onClick={toggleSidebar}
//           />
//         </div>
//       </nav>

//       {isMenuOpen && (
//         <div
//           className={`fixed inset-y-0 right-0 w-75 bg-gray-700 shadow-md z-50 transform transition duration-500 ease-in-out  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
//             }`}
//         >
//           <div className="flex justify-between items-center p-4  ">
//             {/* Close icon */}
//             <IoMdClose
//               className="text-white hover:text-red-600 hover:no-underline cursor-pointer"
//               size={24}
//               onClick={toggleSidebar}
//             />
//             <img
//               src={logo}
//               alt="image"
//               height={80}
//               width={140}
//               className="mt-3 mr-6 ml-2 md:mt-4 mb-4 md:ml-12 filter invert"
//               draggable={false}

//             />
//           </div>
//           <ul className="py-4 flex flex-col pt-5 gap-5">
//             <li>
//               <a
//                 href="#home"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b className="pl-12 flex gap-5">
//                   {" "}
//                   <IoMdHome />
//                   Home
//                 </b>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#project"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b className="pl-12 flex gap-5">
//                   <IoMdInformationCircle />
//                   Project
//                 </b>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b className="pl-12 flex gap-5">
//                   <IoIosChatbubbles />
//                   Experience
//                 </b>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="text-white hover:text-red-600 hover:no-underline"
//               >
//                 <b className="pl-12 flex gap-5">
//                   <IoIosLogIn />
//                   Contact
//                 </b>
//               </a>
//             </li>
//           </ul>
//           <div className="pl-12 pt-7">
//             <Link to="/carrear">
//               <button className="pl-6 pr-6 rounded border border-white text-blue-400 bg-white hover:bg-red-800 hover:border-black hover:text-white hover:scale-110 transition-transform duration-300 mr-4">
//                 My Career
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;