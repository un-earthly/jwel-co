import React from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import AddToCartBtn from './HandleAddToCartBtn';
import { Jewelery } from '../Interfaces/JwellaryInterface';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

export default function ProductDetails({ jewl }: Jewelery) {
    const { title, desc, price,img, quantity, } = jewl;
    const dispatch = useDispatch();
    const RemoveItem = () => {
        dispatch(removeFromCart(jewl));
    }
    return (
        <div className='grid grid-cols-5 my-3'>

            <img src={img} height={200} width={200} className='object-contain' />
            <div className='col-span-2 mx-5 my-auto'>
                <p>{title}</p>
                <p className='text-xs my-2 line-clamp-3'>
                    {desc}</p>
            </div>
            <div className='flex flex-col  space-x-3 items-center justify-center sm:justify-self-end mr-5'>
                <span className='font-regular'>{quantity} X ${price}</span>
                <span>Total : ${parseInt(quantity) * price}</span>
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <AddToCartBtn jewl={jewl} />
                <button className='button' onClick={RemoveItem}>Remove from Cart</button>
            </div>

        </div >
    )
}
