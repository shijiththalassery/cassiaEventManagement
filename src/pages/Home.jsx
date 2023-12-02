import React, { useState } from 'react';
import Header from '../header&footer/Header';
import Carousel from '../Component/Carousel';
import Cards from '../Component/Cards';
import Marrige from '../Component/Marrige';
import Form from '../Component/Form';



function Home() {

  return (
    <div className='border border-black mx-auto'>
      <Header />
      <Carousel />
      <Marrige />
      <Cards />
      <Form />
    </div>
  )
}

export default Home;
