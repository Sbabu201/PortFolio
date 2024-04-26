import { useEffect, useState } from "react";

function useActiveSection() {
    const sections = [
        { id: 'home' },
        { id: 'aboutme' },
        { id: 'skills' },
        { id: 'portfolio' },
        { id: 'companies' },
        { id: 'contact' },
    ];
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = () => {
        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
                const rect = element.getBoundingClientRect();

                // Check if the section is within the visible area of the container
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setActiveSection(section.id); // Set the active section
                    break; // Exit the loop once the active section is found
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Listen for scroll events
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up event listener
        };
    }, [sections]);

    return activeSection; // Return the active section
}

export { useActiveSection }