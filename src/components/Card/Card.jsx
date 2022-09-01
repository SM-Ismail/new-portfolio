import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    const {name, html_url, visibility, watchers} = props.repository;
    return (
        <div className={classes.card}>
            <p><a href={html_url}>{name}</a></p>
            <p>{visibility}</p>
            <p>watchers: {watchers}</p>
        </div>
    );
};

export default Card;