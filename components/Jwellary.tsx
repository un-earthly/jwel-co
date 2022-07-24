import Link from 'next/link';
import React from 'react'
interface Jwellary {
    jewl: {
        id: number | undefined,
        title: string | undefined,
        price: number | undefined,
        description: string | undefined,
        category: string | undefined,
        image: string | undefined,
    }

}
export default function Jwellaries({ jewl }: Jwellary) {
    const { id, title, price, description, category, image } = jewl;
    return (
        // <div className='relative flex flex-col m-5 bg-base-200 h-96'>

        //     <div className="bg-white">
        //     </div>
        //     <div className="card-body">

        //         <h4 className='my-3'>{title}</h4>



        //         <p className='text-xs my-2 line-clamp-2'></p>

        //         <p>{price}</p>


        //         <button className='button'>Add to Cart</button>
        //     </div>
        //     {/* <button className='button' onClick={addItemToBasket}>Add to Basket</button> */}

        // </div>


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
                    <button className="underline">Add to cart</button>
                    <Link href={`details/${id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>


    )
}
