import React from 'react';

const About = ({title, body, link}) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{body}</p>
            <a href={link}>link</a>
        </>
    );
};

export default About;