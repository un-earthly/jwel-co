import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { currentItem } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import Head from 'next/head';
import ProductDetails from '../components/CartProductDetails';
const stripePromise = loadStripe(`${process.env.stripe_public_key}`);
export default function checkout() {
    const jwellaries = useSelector(currentItem)
    const [user] = useAuthState(auth);
    const createCheckoutSesssion = async () => {
        const stripe: any = await stripePromise;
        const checkoutSession = await axios.post("http://localhost:3000/api/checkout_session", { items: jwellaries, email: user?.email })

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if (result.error) toast.error(result.error.message);

    }
    return (
        <div className="grid grid-cols-3 h-screen overflow-auto gap-5 lg:p-10">
            <Head>
                <title>Checkout | Jwel Co</title>
            </Head>
            <div className='flex flex-col m-2 space-y-10 col-span-2'>
                <h1 className='text-3xl border-b pb-4'>{jwellaries.length === 0 ? "Your Cart is Empty" : "Shopping Cart"}</h1>

                {jwellaries.map((j: any) => (

                    <ProductDetails
                        key={j.id}
                        jewl={j} />
                ))}
            </div>
            <div className="flex flex-col space-y-5">
                {/* Total:${total} */}
                <h1 className='text-3xl border-b pb-4'>$0</h1>
                <button className="btn btn-primary" onClick={createCheckoutSesssion}>Checkout</button>
            </div>
        </div>
    )
}
