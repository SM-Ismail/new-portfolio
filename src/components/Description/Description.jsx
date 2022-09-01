import React from 'react';
import classes from "./Description.module.css";

const Description = () => {
    return (
        <div className={classes.describe}>
            <div>
                <h3>My Services</h3>
                <p>From Idea to Execution</p>
            </div>
            <div>
                <p>Marketing, Innovation, Product or Design Team</p>
                <p>have a tool to collaborate on the design process.</p>
            </div>
        </div>
    );
};

export default Description;