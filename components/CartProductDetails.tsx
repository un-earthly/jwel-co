import React from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import AddToCartBtn from './HandleAddToCartBtn';
import { Jewelery } from '../Interfaces/JwellaryInterface';
import { useDispatch } from 'react-redux';
// import { removeFromCart } from '../redux/slices/cartSlice';

export default function ProductDetails({ jewl }: Jewelery) {
    const { title, description: desc, price, image: img, quantity, id, } = jewl;
    const dispatch = useDispatch();
    // const RemoveItem = () => {
    //     dispatch(removeFromCart(jewl.id));
    // }
    return (
        <div className='grid grid-cols-5'>

            <img src={img} height={200} width={200} className='object-contain' />
            <div className='col-span-2 mx-5 my-auto'>
                <p>{title}</p>
                <p className='text-xs my-2 line-clamp-3'>
                    {desc}</p>
                <p>{price}</p>


            </div>
            <div className='flex flex-col sm:flex-row space-x-3 items-center justify-self-center sm:justify-self-end mr-5'>
                <PlusIcon className='h-8 cursor-pointer' />
                <span className='font-bold'>{quantity}</span>
                <MinusIcon className='h-8 cursor-pointer' />
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <AddToCartBtn jewl={jewl} />
                {/* <button className='button' onClick={RemoveItem}>Remove from Basket</button> */}
            </div>

        </div >
    )
}
