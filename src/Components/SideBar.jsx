import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function SideBar({ open, setOpen }) {
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
                    <li className={`menuItem rounded-md  p-3 hover:scale-110 hover:z-50   w-full  transition-all duration-300 ease-in-out ${fragmentWithoutHash === "home" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <a onClick={toggleDrawer} className='w-full ' href="/#home">Home</a>
                    </li>
                    <li className={`menuItem rounded-md w-full bg-purple-200   p-3 hover:scale-110 ${fragmentWithoutHash === "aboutme" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <a onClick={toggleDrawer} href="/#aboutme">About Me</a>
                    </li>
                    <li className={`menuItem rounded-md w-full bg-purple-200   p-3 hover:scale-110 ${fragmentWithoutHash === "skills" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <a onClick={toggleDrawer} href="/#skills">Skills</a>
                    </li>
                    <li className={`menuItem rounded-md w-full bg-purple-200   p-3 hover:scale-110 ${fragmentWithoutHash === "companies" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <a onClick={toggleDrawer} href="/#companies">Companies</a>
                    </li>
                    <li className={`menuItem rounded-md w-full bg-purple-200   p-3 hover:scale-110 ${fragmentWithoutHash === "contact" ? "bg-purple-600" : "bg-purple-400"}`}>
                        <a onClick={toggleDrawer} href="/#contact">Contact Us</a>
                    </li>
                </ul>
            </Drawer>

        </React.Fragment >
    );
}
