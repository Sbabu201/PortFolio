import React from 'react'
import { AppText, socialNetwork } from '../Constants'

const Footer = () => {
  return (
    <div className='bg-gray-200 mt-10 p-20 items-center font-times flex flex-col  px-10 md:px-80'>
      <div className='flex gap-6 '>
        {socialNetwork.map((item, index) => (
          <div key={index}>
            <a href={item.url} target='blank'> <img src={item.logo} alt='logo' className="w-[30px] object-cover" /></a>
          </div>
        ))}
      </div>
      <h1 className='text-gray-500 text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  )
}

export default Footer