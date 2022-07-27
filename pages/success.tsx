import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React from 'react';
const success = () => {
    const router = useRouter()
    return (
        <div className='h-screen grid place-items-center'>

            <main className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col p-10'>
                    <div className='flex items-center space-x-2 mb-5'>
                        <CheckCircleIcon className='h-10 text-green-500' />
                        <h1 className='text-3xl'>Thank you, your order has been confirmed</h1>
                    </div>
                    <p>
                        Thank you for shopping with us. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quisquam sunt beatae eum non, ut iusto impedit error sequi voluptas!
                    </p>

                    <button
                        className='button mt-8'
                        onClick={() => router.push("/orders")}
                    >Go to my orders</button>
                </div>
            </main>
        </div>
    );
};

export default success;