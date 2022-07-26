import React from 'react'
import { useDispatch } from 'react-redux';
import { Jwellary } from '../Interfaces/JwellaryInterface';
import { addToCart } from '../redux/slices/cartSlice';
export default function AddToCartBtn({ jewl }: Jwellary, add: boolean) {
    const dispatch = useDispatch();
    const dispatchCart = () => {
        dispatch(addToCart(jewl));
    }
    return (
        <button className="underline" onClick={dispatchCart}>Add to cart</button>
    )
}
