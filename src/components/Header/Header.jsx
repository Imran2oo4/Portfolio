
import React from "react";
import './Header.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import { FormattedMessage } from "react-intl";
import GradientText from './GradientText';

const Header = () => {
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <GradientText
                    colors={["#40ffaa", "#FFD700", "#DC143C", "#40d2ff", "#40ffaa", "#FFD700", "#DC143C", "#40d2ff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    IMRAN1124
                </GradientText>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <GradientText colors={["#40ffaa", "#FFD700", "#DC143C", "#40d2ff", "#40ffaa", "#FFD700", "#DC143C", "#40d2ff"]} animationSpeed={3} showBorder={false} className="custom-class">
                        <FormattedMessage id='home' defaultMessage='Home' />
                    </GradientText>
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    <GradientText colors={["#40ffaa", "#FFD700", "#FF0000", "#40ffaa", "#FFD700", "#FF0000"]} animationSpeed={3} showBorder={false} className="custom-class">
                        <FormattedMessage id='about' defaultMessage='About me' />
                    </GradientText>
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    <GradientText colors={["#40ffaa", "#FFD700", "#FF0000", "#40ffaa", "#FFD700", "#FF0000"]} animationSpeed={3} showBorder={false} className="custom-class">
                        <FormattedMessage id='projects' defaultMessage='Projects' />
                    </GradientText>
                </Link>
                <Link to="experience" spy={true} offset={-150} href="#experience">
                    <GradientText colors={["#40ffaa", "#FFD700", "#FF0000", "#40ffaa", "#FFD700", "#FF0000"]} animationSpeed={3} showBorder={false} className="custom-class">
                        <FormattedMessage id='experience' defaultMessage='Experience' />
                    </GradientText>
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    <GradientText colors={["#40ffaa", "#FFD700", "#FF0000", "#40ffaa", "#FFD700", "#FF0000"]} animationSpeed={3} showBorder={false} className="custom-class">
                        <FormattedMessage id='contact' defaultMessage='Contact' />
                    </GradientText>
                </Link>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);