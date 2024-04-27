import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import { useNavigate } from 'react-router-dom';


export default function SideBar({ open, setOpen }) {
    const navigate = useNavigate();

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
