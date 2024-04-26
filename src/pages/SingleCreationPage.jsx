import React from 'react'
import { useParams } from 'react-router-dom'
import { MyCreations } from '../Constants'
const SingleCreationPage = () => {
    const { id } = useParams()
    const items = MyCreations.filter((item) => {
        return item.id === Number(id)
    })

    return (
        <div className='flex flex-col'>
            {
                items.map((item) => (
                    <div className='flex flex-col'>
                        {
                            item.items.map((value) => (
                                <span>{value.name}</span>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default SingleCreationPage
