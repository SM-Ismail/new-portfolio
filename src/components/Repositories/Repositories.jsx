import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import classes from './Repositories.module.css';

const Repositories = () => {
    const [repos, setRepos] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/SM-Ismail/repos")
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            setRepos(data);
        })
    }, []);

    return (
        <div className={classes.structure}>
            {
                repos.map(r => <Card repository={r} key={r.id}></Card>)
            }
        </div>
    );
};

export default Repositories;