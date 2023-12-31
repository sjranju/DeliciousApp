import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CLOUDINARY_URL } from '../utils/constants'
import * as TYPES from "../utils/interfaces"
import { PiDotOutlineFill } from 'react-icons/pi'

interface iRestaurantProp {
    resData: TYPES.RestaurantType
}

export const RestaurantCard = (props: iRestaurantProp) => {
    const { resData } = props
    const { name, avgRating, cuisines, areaName, cloudinaryImageId, sla } = resData?.info
    return (
        <div className="flex flex-col justify-center items-start hover:transition hover:duration-250 hover:ease-in-out hover:scale-95">
            <img className='w-full h-[169px] rounded-lg mb-1 object-cover'
                src={`${CLOUDINARY_URL + cloudinaryImageId}`} alt='restaurant-food' />
            <div className='font-medium truncate max-w-2xs'>{name}</div>
            <div className='flex items-center font-medium'><AiFillStar color='green' className='mr-1/2' />{avgRating}<PiDotOutlineFill size={18} />{sla.deliveryTime} mins</div>
            <div className='truncate max-w-3xs text-sm text-slate-600'>{cuisines.join(', ')}</div>
            <div className='truncate max-w-3xs text-sm text-slate-600'>{areaName}</div>
        </div>
    )

}

export default RestaurantCard