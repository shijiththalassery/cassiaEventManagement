import React from 'react'
import "../css/Animated.css";
import Header from '../header&footer/Header';

function Gallery() {

  return (
    <>
      <Header />
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 w-full h-1/2 animated-grid'>
        <div className='col-span-1 w-full h-full border border-red-500 animated-grid'>one</div>
        <div className='col-span-1 w-full h-full border border-red-500'>two</div>
        <div className='col-span-1 w-full h-full border border-red-500'>three</div>
        <div className='col-span-1 w-full h-full border border-red-500'>four</div>
      </div>




      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 w-full h-1/2 animated-grid '>
        <div className='col-span-1 w-full h-full border border-red-500 content-x text-center'>
          <h1>hai this is shiji</h1>
          <h1>from bangalore</h1>
          <h1>hsr lay out</h1>
          <h1>karnataka</h1>
        </div>
        <div className='col-span-1 w-full h-full border border-red-500 content-y text-center'>
          <h1>hai this is shijith</h1>
          <h1>from kundthil thekkeyil</h1>
          <h1>thottummal</h1>
          <h1>thalassery</h1>
        </div>
      </div>


      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg p-4">
          <div className="flex flex-col sm:flex-row justify-between animated-grid">

            <div className="w-full sm:w-[30%] bg-blue-500 p-4 mb-4 sm:mb-0 content-x">
              Left Content
            </div>


            <div className="w-full sm:w-[40%] bg-green-500 p-4 content-y">
              Center Content
            </div>


            <div className="w-full sm:w-[30%] bg-red-500 p-4 content-yr">
              Right Content
            </div>
          </div>
        </div>
      </div>





      <div className='flex flex-col gap-5 justify-between mx-auto sm:flex-row'>
        <div>hai</div>
        <div>this</div>
        <div>sreya</div>
      </div>
    </>
  )
}

export default Gallery
