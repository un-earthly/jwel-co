import Link from 'next/link';
import React from 'react'
import { Jewelery } from '../Interfaces/JwellaryInterface';
import HandleCartBtn from './HandleAddToCartBtn';
export default function Jwellaries({ jewl }: Jewelery) {
    const { id, title, price, description: desc, category, image: img } = jewl;

    return (

        <div className="card bg-base-100 shadow-xl z-30">
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <figure className="bg-white p-5">
                <img className='h-32 w-32 object-contain' src={img} alt="" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg">{title?.length > 20 ? title?.slice(0, 20) + '...' : title}</h2>
                <p className="text-sm">{desc}</p>
                <p className="text-sm">{price}</p>
                <div className="card-actions justify-between">
                    <HandleCartBtn jewl={jewl} />
                    <Link href={`details/${id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>


    )
}
