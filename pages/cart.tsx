import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductDetails from '../components/CartProductDetails'
import { Jewelery } from '../Interfaces/JwellaryInterface'
import { currentItem } from '../redux/slices/cartSlice'

export default function Cart() {
    const jwellaries = useSelector(currentItem)
    return (
        <div className="space-y-5 max-w-6xl mx-auto p-10 h-screen overflow-auto">
            <Head>
                <title>Your Cart | Jwel Co</title>
            </Head>
            <div>
                <h1 className="text-3xl border-b py-3">Your Cart has: {jwellaries.length > 1 ? jwellaries.length + " items" : jwellaries.length + " item"}</h1>
                <div>

                    {
                        jwellaries.map((j: any) => <ProductDetails jewl={j} key={j.id} />)
                    }
                </div>
                <button className='block ml-auto underline'> <Link href="/checkout">Proceed to checkout</Link></button>
            </div>
        </div>
    )
}

