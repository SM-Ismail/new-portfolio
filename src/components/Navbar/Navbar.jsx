import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navigation}>
            <a><img src="" alt="" srcset="" /></a>
            <a  href="#home">Home</a>
            <a  href="#news">News</a>
            <a  href="#contact">Contact</a>
            <a className={`${classes.topnav} ${classes.new}`} href="#about">About</a>
        </div>
    );
};

export default Navbar;