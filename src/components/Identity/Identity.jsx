import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from "./Identity.module.css";

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
                <img src={myProfile.avatar_url} alt="" srcset="" />
            </div>
            <div>
                <h1>{myProfile.name}</h1>
                <h2>Hey there !!! Welcome to my Portfolio site...</h2>
                <p>I am a FrontEnd Developer at <span>HealthX</span>. Happy to have you here .. </p>
            </div>
        </div>
    );
};

export default Identity;