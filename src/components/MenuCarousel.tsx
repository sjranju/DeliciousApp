import React from "react"
import * as TYPES from '../utils/interfaces'
import { CLOUDINARY_URL } from "../utils/constants";

interface iProps {
    items: {
        "@type": TYPES.CardType.MenuCarousel;
        title: string;
        carousel: TYPES.MenuCarouselItem[];
    }
}

const MenuCarousel = (props: iProps) => {
    const { items } = props
    return (
        <div className="flex flex-row items-center justify-between overflow-x-scroll [&::-webkit-scrollbar]:hidden space-x-8 my-6">
            {
                items?.carousel?.map(card =>
                    <img key={card?.bannerId} src={CLOUDINARY_URL + card.creativeId} className="h-28 w-32 md:h-72 md:w-64"></img>
                )
            }

        </div>
    )
}

export default MenuCarousel