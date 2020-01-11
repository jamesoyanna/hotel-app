import React from 'react';

const Hero = ({ hero}) => {
    return (
       <header className={hero}>

       </header>
    );
}

Hero.defaultProps = {
    hero: "defaultHero"
};
export default Hero;
