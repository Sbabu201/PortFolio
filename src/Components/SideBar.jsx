import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import { useNavigate } from 'react-router-dom';


export default function SideBar({ open, setOpen }) {
    const navigate = useNavigate()
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
                <ul className="md:hidden absolute text-white flex mt-8 flex-col gap-2 rounded-md  w-full p-2">
                    <li onClick={() => { navigate("/#home"); toggleDrawer() }} className={`menuItem rounded-md  p-3 hover:scale-110 hover:z-50   w-full  transition-all duration-300 ease-in-out ${fragmentWithoutHash === "home" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <p me='w-full ' href="/#home">Home</p>
                    </li>
                    <li onClick={() => { navigate("/#aboutme"); toggleDrawer() }} className={`menuItem rounded-md w-full    p-3 hover:scale-110 ${fragmentWithoutHash === "aboutme" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <p >About Me</p>
                    </li>
                    <li onClick={() => { navigate("/#skills"); toggleDrawer() }} className={`menuItem rounded-md w-full    p-3 hover:scale-110 ${fragmentWithoutHash === "skills" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <p >Skills</p>
                    </li>
                    <li onClick={() => { navigate("/#companies"); toggleDrawer() }} className={`menuItem rounded-md w-full    p-3 hover:scale-110 ${fragmentWithoutHash === "companies" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <p >Companies</p>
                    </li>
                    <li onClick={() => { navigate("/#contact"); toggleDrawer() }} className={`menuItem rounded-md w-full    p-3 hover:scale-110 ${fragmentWithoutHash === "contact" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <p >Contact Us</p>
                    </li>
                    <li onClick={() => { navigate("/mycreativity"); toggleDrawer() }} className={`menuItem rounded-md w-full    p-3 hover:scale-110 ${window.location.pathname === "/mycreativity" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <p >my Creativity</p>
                    </li>
                </ul>
            </Drawer>

        </React.Fragment >
    );
}
