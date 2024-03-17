import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </>
    );
};

export default Title;