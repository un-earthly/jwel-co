import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductDetails from '../components/CartDetails'
import { currentItem } from '../redux/slices/cartSlice'

export default function Cart() {
    const jwellaries = useSelector(currentItem)
    return (
        <div className="space-y-5 max-w-6xl mx-auto p-10">
            <Head>
                <title>Your Cart | Jwel Co</title>
            </Head>
            <div className="grid">
                {
                    jwellaries.map((j: any) => <ProductDetails jewl={j} key={j.id} />)
                }
            </div>
        </div>
    )
}

