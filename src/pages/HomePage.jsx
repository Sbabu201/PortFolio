
import { useLocation, useNavigate } from 'react-router-dom';
import { NavBar, Home, Portfolio } from '../Components';
import AboutMe from '../Components/AboutMe';
import Companies from '../Components/Companies';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import Skills from '../Components/Skills';
import { Toaster } from "react-hot-toast"
import { useEffect, useRef, useState } from 'react';
function useSmoothScrolling() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        // Get current hash fragment
        if (hash) {
            const element = document.getElementById(hash.slice(1)); // Find the element with matching ID
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Scroll to element smoothly
            }
        }
    }, [location]); // Run effect when location changes
}


function HomePage() {

    useSmoothScrolling()


    return (
        <div className="App custom-scrollbar scroll-smooth overflow-y-auto  ">
            <Toaster />

            <Home />
            {/* About Me */}
            <AboutMe />
            {/* Skills */}
            <Skills />
            {/* Portfolio */}
            <Portfolio />

            {/* Companies */}
            <Companies />
            {/* Contact Us */}
            <ContactUs />

            <Footer />
        </div>
    );
}

export default HomePage;
