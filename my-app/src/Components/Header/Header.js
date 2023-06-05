import React, { useEffect, useState } from 'react'
import logo from '../../Assets/imgs/Logo.png'
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
        sections.forEach((link) => link.classList.remove("active"));
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
                        section.classList.add("active");
                    }
                });
            }
        });
    };

    document.addEventListener("scroll", handleScroll);

    return (
        <nav id="navbar" className="navbar">
            <img src={logo} alt='SBP' />
            <div>
                <a data-scroll="home" href="#home" className="active"> Inicio </a>
                <hr />
                <a data-scroll="about" href="#about"> Sobre </a>
                <hr />
                <a data-scroll="work" href="#work"> Trabalho </a>
            </div>

        </nav>
    )
}
