import React from 'react';
import Hero from '../../Hero';
import { homeObjOne } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjOne} />
    </>
  );
}

export default Services;
