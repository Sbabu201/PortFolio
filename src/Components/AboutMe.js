import React from 'react'
import './../assets'
import './../Components'
import { laptop, wave } from './../assets'
import { aboutSection, AppText } from '../Constants'
const AboutMe = () => {
  return (
    <div id="aboutme" className='mt-[100px]  font-times'>
      <img src={wave} alt='wave' className="w-screen absolute " />
      <div className='w-full bg-purple-600 h-fit md:h-[300px]  justify-center items-center'>
        <div className='flex flex-row justify-between absolute'>
          <img src={laptop} alt='laptop' className="w-[150px] md:w-[300px] mt-[-100px] " />
        </div>
        <h1 className='text-white text-[50px] pt-[20px] font-bold text-center'>About</h1>
        <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px]  text-white'>{AppText.aboutMeDescripion} </h1>
      </div>
      <div className='flex flex-col justify-between md:flex-row mt-[10px] md:px-40    '>
        {
          aboutSection.map((item, index) => (

            <div key={index} className="flex    relative md:w-[40%] items-center justify-center flex-col m-2
                group md:hover:bg-purple-600 hover:shadow-lg duration-300 ease-in-out rounded-lg py-2">
              <img src={item.image} alt='item' className="w-[300px] shadow-lg rounded-lg h-[230px] object-cover" />
              <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
              <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
            </div>


          ))
        }

      </div>
    </div>

  )
}

export default AboutMe