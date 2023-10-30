import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
    <div className='flex justify-center gap-5 lg:gap-16 lg:pt-0 md:pt-1 sm:pt-3  px-5 '>
      <div>
        <Image src={"/images/google.png"} alt='google' width={200} height={30}/>
      </div>
      <div>
      <Image src={"/images/upork.png"} alt='google' width={200} height={30}/>
      </div>
      <div>
      <Image src={"/images/google.png"} alt='google' width={200} height={30}/>
      </div>
      <div>
      <Image src={"/images/upork.png"} alt='google' width={200} height={30}/>
      </div>
    </div>
  )
}

export default Company