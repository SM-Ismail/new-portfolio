import React from 'react';
import classes from "./Navbar.module.css";
import {FaCat} from "react-icons/fa";

const Navbar = () => {
    return (
        <div className={classes.navigation}>
            <a><FaCat size={'2em'} color={'darkblue'}/></a>
            <a  href="#home">Home</a>
            <a  href="#news">News</a>
            <a  href="#contact">Contact</a>
            <a className={`${classes.topnav} ${classes.new}`} href="#about">About</a>
            <button>Contact Me</button>
            <div>+8801624010942</div>
            
        </div>
    );
};

export default Navbar;