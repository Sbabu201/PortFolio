import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./../assets/logo4.png";
import SideBar from "./SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../Shared/UseActiveSection";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import toast from "react-hot-toast";
const NavBar = () => {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript, listening } = useSpeechRecognition();
  console.log(transcript)
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
    if (transcript) {
      console.log('transcript', transcript)
      if (transcript.includes("Go to my creativity") || transcript.includes("my creativity")) {
        resetTranscript();
        navigate("/mycreativity")
      }
      if (transcript.includes("Go to home") || transcript.includes("home")) {
        resetTranscript();
        navigate("/#home")
      }
      if (transcript.includes("Go to about") || transcript.includes("Go to about me") || transcript.includes("about me") || transcript.includes("about")) {
        resetTranscript();
        navigate("/#aboutme")
      }
      if (transcript.includes("Go to skill") || transcript.includes("Go to skills") || transcript.includes("skills") || transcript.includes("skill")) {
        resetTranscript();
        navigate("/#skills")
      }
      if (transcript.includes("Go to companies") || transcript.includes("companies") || transcript.includes("Go to company")) {
        resetTranscript();
        navigate("/#companies")
      }
      if (transcript.includes("Go to contact") || transcript.includes("Go to contact me") || transcript.includes("contact") || transcript.includes("contact me")) {
        resetTranscript();
        navigate("/#contact")
      }
      if (transcript.includes("Thank you" || "stop speech")) {

        SpeechRecognition.stopListening()
        toast.success("speech recognisation turned off ...")
        resetTranscript();
      }
    }
  }, [transcript, resetTranscript])

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
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
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


          <li onClick={() => { toast.success("say the section name like go to home "); SpeechRecognition.startListening({ continuous: true }) }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${listening ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >try Speach recognition</p>
          </li>
          <li onClick={() => { navigate("/#home") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "home" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >Home</p>
          </li>
          <li onClick={() => { navigate("/#aboutme") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "aboutme" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >About Me</p>
          </li>
          <li onClick={() => { navigate("/#skills") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "skills" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >Skills</p>
          </li>
          <li onClick={() => { navigate("/#companies") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "companies" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p>Companies</p>
          </li>
          <li onClick={() => { navigate("/#contact") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "contact" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
            <p >Contact Us</p>
          </li>
          <li onClick={() => { navigate("/mycreativity") }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600 hover:-translate-y-1  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${window.location.pathname === "/mycreativity" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
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
