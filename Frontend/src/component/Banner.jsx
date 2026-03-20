import React from 'react'
import banner from "../assets/Banner.png";


function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Hello Readers, Welcome Here to learn Something <span className='text-pink-400'>New Everyday !!!</span></h1>
            <p className='text-2xl'>
               Welcome to <span className='text-orange-300'>Finolex College Library!</span><br></br>
                We make it simple to find your next great read.Browse a world of stories,from new hits to old favorites.Your next adventure starts here, happy reading!
            </p>
                
  
            </div> 
              
        </div>
        <div className="w-full order-1 md:2 md:w-1/2 mt-12 md:mt-32">
            <img src={banner} className="w-full h-full" alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner
