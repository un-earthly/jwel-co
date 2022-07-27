/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='h-screen'>

            <main className='max-w-screen-lg mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 border-yellow-400'>Your orders</h1>

                {user ? (
                    <h2>X orders</h2>
                ) : (
                    <h2>Please Sign in to see your order</h2>
                )}
            </main>
        </div>
    );
};

export default orders;