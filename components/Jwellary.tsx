import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
interface Jwellary {
    jewl: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
    }

}
export default function Jwellaries({ jewl }: Jwellary) {
    const { id, title, price, description, category, image } = jewl;
    const dispatch = useDispatch();
    const dispatchCart = () => {
        dispatch(addToCart(jewl));
    }
    return (

        <div className="card bg-base-100 shadow-xl z-30">
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <figure className="bg-white p-5">
                <img className='h-32 w-32 object-contain' src={image} alt="" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg">{title?.length > 20 ? title?.slice(0, 20) + '...' : title}</h2>
                <p className="text-sm">{description}</p>
                <p className="text-sm">{price}</p>
                <div className="card-actions justify-between">
                    <button className="underline" onClick={dispatchCart}>Add to cart</button>
                    <Link href={`details/${id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>


    )
}
