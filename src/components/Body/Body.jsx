import React from 'react';
import Connect from '../Connect/Connect';
import Description from '../Description/Description';
//import Navbar from '../Navbar/Navbar';
import Identity from '../Identity/Identity';
import Repositories from '../Repositories/Repositories';
import classes from "./Body.module.css";

const Body = () => {
        
    return (
        <div className='classes.container'>
                     
            <Identity></Identity>
            
            <Connect></Connect>
            
            <Description></Description>
            
            <Repositories></Repositories>
            
            
        </div>
    );
};

export default Body;