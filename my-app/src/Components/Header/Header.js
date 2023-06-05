import React, { useEffect, useState } from 'react'
import './Header.scss'

export default function Header() {
    const [sections, setSections] = useState("");
    const [navLinks, setNavLinks] = useState("");

    useEffect(() => {
        setSections(document.querySelectorAll("section"));
        setNavLinks(document.querySelectorAll("nav a"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const resetLinks = () => {
        navLinks.forEach((link) => link.classList.remove("active"));
    };

    const handleScroll = () => {
        const { pageYOffset } = window;

        [...sections].forEach((section) => {
            
            const { id, offsetTop, clientHeight } = section;
            const offset = offsetTop - 1;

            if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
                resetLinks();
                navLinks.forEach((link) => {
                    if (link.dataset.scroll === id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    document.addEventListener("scroll", handleScroll);

    return (
        <nav id="navbar" className="navbar">
            <span className="material-symbols-outlined"> menu </span>
            <a data-scroll="home" href="#home" className="active"> Home </a>
            <a data-scroll="about" href="#about"> About </a>
            <a data-scroll="work" href="#work"> Work </a>
        </nav>
    )
}
