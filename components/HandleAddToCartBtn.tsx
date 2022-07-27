import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import auth from '../firebase.init';
import Router, { useRouter } from "next/router";
import { Jewelery } from '../Interfaces/JwellaryInterface';
import { addToCart } from '../redux/slices/cartSlice';
export default function AddToCartBtn({ jewl }: Jewelery, add: boolean) {
    const router = useRouter()
    const [user] = useAuthState(auth)
    const dispatch = useDispatch();
    console.log(router)
    const dispatchCart = () => {
        dispatch(addToCart(jewl));
    }
    return (
        <button className="underline" onClick={() => !user ? Router.push({ pathname: '/login', query: { from: router.asPath }, }) : dispatchCart()}>Add to cart</button>
    )
}
