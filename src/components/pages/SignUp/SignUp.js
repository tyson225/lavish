import React from 'react';
import Hero from '../../Hero';
import { homeObjFour } from './Data';
import Pricing from '../../Pricing';

function SignUp() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjFour} />
    </>
  );
}

export default SignUp;
