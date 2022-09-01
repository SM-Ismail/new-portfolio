import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from "./Identity.module.css";
import {FaMobile} from "react-icons/fa";

const Identity = () => {

    const [myProfile, setMyProfile] = useState({});
    
    useEffect(()=>{
        fetch("https://api.github.com/users/SM-Ismail")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setMyProfile(data);
        })
    }, []);

    return (
        <div className={classes.holder}>
            <div>
                <div>
                    <FaMobile size={'3em'} color={'cadetblue'}/>
                </div>
                <p>Solutions for your Website</p>
                <h1>{myProfile.name}</h1>
                {/* <h2>Hey there !!! Welcome to my Portfolio site...</h2> */}
                <p>FrontEnd Developer at <span>HealthX</span>. Happy to have you here .. </p>
                <button className={classes.consultation}>Free Consultation</button>
                <button className={classes.services}>See my services</button>
            </div>
            <div>
                <img src={myProfile.avatar_url} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Identity;