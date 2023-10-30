import React from 'react'

const HeroSection = () => {
    return (
       <div className='flex px-16 py-16 '>
         <div>
            <h1 className='text-[3rem] md:text-[4rem]  font-bold text-[#262534]'>
                <span className='text-[#536E57] pr-3 justify-center'>
                    Unleash  
                </span>
                   the Power <br/>
                   of Innovation
            </h1>
            <div className='py-8 text-[#262534] w-[100%] lg:w-[75%]'>
                In a world constantly reshaped by technology, harness the potential within you.
                Embrace change, drive innovation, and chart the future. Your journey to redefine
                the digital frontier begins now.
            </div>
           <div className='py-8'>
           <button className='bg-[#262534]  text-center  text-white px-2.5 py-3 w-56 rounded-xl'>
                <div className='uppercase'>Join now</div>
            </button>
           </div>
        </div>
        <div className='w-[90%] lg:flex hidden  '>
            <img src='/images/banner.svg' alt='hero image'/>
        </div>
       </div>
    )
}

export default HeroSection