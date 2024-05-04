import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import toast from 'react-hot-toast';


export default function SideBar({ open, setOpen }) {
    const { transcript, browserSupportsSpeechRecognition, listening, resetTranscript } = useSpeechRecognition();

    const navigate = useNavigate();
    React.useEffect(() => {
        if (transcript) {
            console.log('transcript', transcript)
            if (transcript.includes("Go to my creativity") || transcript.includes("my creativity")) {
                resetTranscript();
                navigate("/mycreativity")
                toggleDrawer()
            }
            if (transcript.includes("Go to home") || transcript.includes("home")) {
                resetTranscript();
                navigate("/#home")
                toggleDrawer()
            }
            if (transcript.includes("Go to about") || transcript.includes("Go to about me") || transcript.includes("about me") || transcript.includes("about")) {
                resetTranscript();
                navigate("/#aboutme")
                toggleDrawer()
            }
            if (transcript.includes("Go to skill") || transcript.includes("Go to skills") || transcript.includes("skills") || transcript.includes("skill")) {
                resetTranscript();
                navigate("/#skills")
                toggleDrawer()
            }
            if (transcript.includes("Go to companies") || transcript.includes("companies") || transcript.includes("Go to company")) {
                resetTranscript();
                navigate("/#companies")
                toggleDrawer()
            }
            if (transcript.includes("Go to contact") || transcript.includes("Go to contact me") || transcript.includes("contact") || transcript.includes("contact me")) {
                resetTranscript();
                navigate("/#contact")
                toggleDrawer()
            }
            if (transcript.includes("Thank you" || "stop speech")) {

                SpeechRecognition.stopListening()
                toast.success("speech recognisation turned off ...")

                resetTranscript();
            }
        }
    }, [transcript, resetTranscript])

    const hashFragment = window.location.hash; // E.g., "#aboutme"
    const fragmentWithoutHash = hashFragment.substring(1);
    const toggleDrawer = () => {
        setOpen()
    }

    return (
        <React.Fragment>

            <Drawer
                open={open}
                onClose={toggleDrawer}
            >
                <ul className="flex flex-col items-center justify-center  gap-2  font-bold font-times md:hidden">
                    <li onClick={() => { toast.success("say the section name like go to home "); SpeechRecognition.startListening({ continuous: true }) }} className={` w-[90%] mx-auto  py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${listening ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >try Speach recognition</p>
                    </li>
                    <li onClick={() => { navigate("/#home"); toggleDrawer() }} className={` w-[90%] mx-auto  py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${fragmentWithoutHash === "home" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >Home</p>
                    </li>
                    <li onClick={() => { navigate("/#aboutme"); toggleDrawer() }} className={`  w-[90%] mx-auto   py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${fragmentWithoutHash === "aboutme" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >About Me</p>
                    </li>
                    <li onClick={() => { navigate("/#skills"); toggleDrawer() }} className={`  w-[90%] mx-auto   py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${fragmentWithoutHash === "skills" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >Skills</p>
                    </li>
                    <li onClick={() => { navigate("/#companies"); toggleDrawer() }} className={`  w-[90%] mx-auto   py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${fragmentWithoutHash === "companies" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p>Companies</p>
                    </li>
                    <li onClick={() => { navigate("/#contact"); toggleDrawer() }} className={`  w-[90%] mx-auto   py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${fragmentWithoutHash === "contact" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >Contact Us</p>
                    </li>
                    <li onClick={() => { navigate("/mycreativity"); toggleDrawer() }} className={`  w-[90%] mx-auto   py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${window.location.pathname === "/mycreativity" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >my Creativity</p>
                    </li>
                </ul>
            </Drawer>

        </React.Fragment >
    );
}
