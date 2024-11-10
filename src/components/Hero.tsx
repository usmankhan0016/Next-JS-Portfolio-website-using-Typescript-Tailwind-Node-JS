/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Navbar from './Navbar'
function Hero() {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/Gray_profile.JPEG-modified.png)] bg-left lg:bg-[15%] bg-cover'
     style={{backgroundSize :"32%"}}>
    <Navbar/>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font:bold leading-tight flex justify-center items-center'>
            <div className='pt-10'>
                <p data-aos="zoom-in-up">I&apos;m</p>
                <p data-aos="zoom-in-up">Usman</p>
                <p data-aos="zoom-in-up">Khan</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero

