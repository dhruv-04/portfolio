import React from 'react';
import './background.css';

const Background = () => {
    const totalStars = 300;

    const stars = Array.from({ length: totalStars }).map((_, index) => (
        <div
            key={index}
            className="star"
            style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random(),
            }}
        />
    ));

    return <div className='background-container'>{stars}</div>;
};

export default Background;