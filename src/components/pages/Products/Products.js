import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Services() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjFour} />
    </>
  );
}

export default Services;
