import React from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
export default function ProductDetails() {
    return (
        <div className='grid grid-cols-5'>

            <img src="https://d3nn873nee648n.cloudfront.net/HomeImages/Beauty.jpg" height={200} width={200} className='object-contain' />
            <div className='col-span-2 mx-5 my-auto'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='text-xs my-2 line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam saepe illum consequuntur? Quisquam quidem modi cupiditate amet doloremque. Aliquid, excepturi corporis tenetur culpa cumque dolorum perspiciatis quae dolor dicta minus.</p>
                <p>price</p>


            </div>
            <div className='flex flex-col sm:flex-row space-x-3 items-center justify-self-center sm:justify-self-end mr-5'>
                <PlusIcon className='h-8 cursor-pointer' />
                <span className='font-bold'>0</span>
                <MinusIcon className='h-8 cursor-pointer' />
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button'>Add to Basket</button>
                <button className='button'>Remove from Basket</button>
            </div>

        </div >
    )
}
