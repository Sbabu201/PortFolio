import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./../assets/logo4.png";
import SideBar from "./SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../Shared/UseActiveSection";
const NavBar = () => {
  const data = useActiveSection();
  const hashFragment = window.location.hash; // E.g., "#aboutme"
  const fragmentWithoutHash = hashFragment.substring(1);
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setOpen = () => {
    setToggle(state => !state)
  }
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
      <p onClick={() => { navigate("/#home") }}>
        <img
          src={logo}
          alt="image"
          height={100}
          width={110}
          className="mt-3 ml-2 md:mt-4 mb-4 md:ml-12 w-20 md:w-32 h-20  object-cover filter invert"
          draggable={false}
        />
      </p>
      <div>
        <ul className="hidden font-bold font-times md:flex">
          <li onClick={() => { navigate("/#home") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "home" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >Home</p>
          </li>
          <li onClick={() => { navigate("/#aboutme") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "aboutme" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >About Me</p>
          </li>
          <li onClick={() => { navigate("/#skills") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "skills" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >Skills</p>
          </li>
          <li onClick={() => { navigate("/#companies") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "companies" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p>Companies</p>
          </li>
          <li onClick={() => { navigate("/#contact") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "contact" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >Contact Us</p>
          </li>
          <li onClick={() => { navigate("/mycreativity") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${window.location.pathname === "/mycreativity" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >my Creativity</p>
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


          {<SideBar open={toggle} setOpen={setOpen} />}
        </div>
        {/* <ul className={!toggle?'hidden':'flex'}>
                LOGO
            </ul> */}
      </div>
    </div>
  );
};

export default NavBar;
