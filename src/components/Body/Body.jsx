import React from 'react';
import Connect from '../Connect/Connect';

import Identity from '../Identity/Identity';
import Repositories from '../Repositories/Repositories';
import classes from "./Body.module.css";

const Body = () => {
        
    return (
        <div className='classes.container'>
            <Identity></Identity>
            <Connect></Connect>
            <Repositories></Repositories>
        </div>
    );
};

export default Body;