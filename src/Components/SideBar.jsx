import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../Shared/UseActiveSection';


export default function SideBar({ open, setOpen }) {
    const navigate = useNavigate();
    const data = useActiveSection();
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
                <ul className="flex flex-col gap-2 font-bold font-times md:hidden">
                    <li onClick={() => { navigate("/#home"); toggleDrawer() }} className={`menuItem  w-full  py-3  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "home" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >Home</p>
                    </li>
                    <li onClick={() => { navigate("/#aboutme"); toggleDrawer() }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "aboutme" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >About Me</p>
                    </li>
                    <li onClick={() => { navigate("/#skills"); toggleDrawer() }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "skills" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >Skills</p>
                    </li>
                    <li onClick={() => { navigate("/#companies"); toggleDrawer() }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "companies" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p>Companies</p>
                    </li>
                    <li onClick={() => { navigate("/#contact"); toggleDrawer() }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${data === "contact" && window.location.pathname === "/" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >Contact Us</p>
                    </li>
                    <li onClick={() => { navigate("/mycreativity"); toggleDrawer() }} className={`menuItem  py-1  bg-gradient-to-r hover:from-purple-200 hover:to-purple-600  px-6 rounded-md hover:animate-pulse hover:text-white transition-all duration-300 ease-in-out ${window.location.pathname === "/mycreativity" ? "from-purple-200 to-purple-600 text-white " : ""}`}>
                        <p >my Creativity</p>
                    </li>
                </ul>
            </Drawer>

        </React.Fragment >
    );
}
