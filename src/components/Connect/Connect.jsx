import React from 'react';
import classes from './Connect.module.css';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Connect = () => {
    return (
        <div className={classes.media}>
            <div><a href="https://www.facebook.com/sayem.mohammadismail" target="_blank"><FaFacebook size={'5em'} color={'darkblue'}/></a></div>
            <div><a href="https://www.linkedin.com/in/sm-ismail/" target="_blank"><FaLinkedin size={'5em'} color={'dodgerblue'}/></a></div> 
            <div><a href="https://github.com/SM-Ismail" target="_blank"><FaGithub size={'5em'} color={'black'}/></a></div>
            <div><a href="https://www.instagram.com/sayemm__/" target="_blank"><FaInstagram size={'5em'} color={'brown'}/></a></div>
        </div>
    );
};

export default Connect;