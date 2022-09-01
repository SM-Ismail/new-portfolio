import React from 'react';
import classes from './Card.module.css';
import {FaCat} from "react-icons/fa";

const Card = (props) => {
    const {name, html_url, visibility, watchers} = props.repository;
    return (
        <div className={classes.card}>
            <FaCat size={'2em'} color={'cornflowerblue'}/>
            <p><a href={html_url}>{name}</a></p>
            <p>{visibility}</p>
            <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sequi totam id quod
                error ducimus debitis voluptate suscipit
                corrupti saepe. Commodi assumenda mollitia 
                dolorum, quibusdam error amet vel hic repudiandae est.
            </p>
        </div>
    );
};

export default Card;