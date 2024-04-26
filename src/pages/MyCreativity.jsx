import React from 'react'
import { MyCreations } from '../Constants'
import { useNavigate } from 'react-router-dom'
const MyCreativity = () => {
    const navigate = useNavigate()
    return (
        <div className='flex font-times flex-col gap-6 overflow-y-auto'>
            <div className='flex animate-scrollRight duration-500 w-full '>
                <span className='text-lg md:text-3xl mt-4 ease-linear'>WellCome to My Fun Place</span>
            </div>
            <div className='w-full flex justify-center '>
                <span className=' text-purple-400 text-lg md:text-3xl ease-linear border-b-2 border-red-500'>Fun Creations</span>
            </div>
            <div className='flex w-full flex-wrap p-4  justify-center  gap-10  mb-10'>
                {MyCreations.map((item, idx) => {
                    return (
                        <div key={idx} onClick={() => { navigate(`/creativepost/${item?.id}`) }} className='flex  w-[90%] flex-col gap-4 cursor-pointer md:w-[23%] hover:scale-110 hover:text-purple-400 transition-transform duration-300 border border-gray-100 hover:border-purple-200 hover:border-2 hover:animate-pulse  rounded-md shadow-xl   h-[320px] border-b-2 '>
                            <img src={item.imageUrl} className='w-full h-[70%] object-cover' alt="" />
                            <span className='text-sm font-bold'>{item.title}</span>
                            <span>{item.desc}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyCreativity
