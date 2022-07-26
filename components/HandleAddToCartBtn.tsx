import React from 'react'
import { useDispatch } from 'react-redux';
import { Jewelery } from '../Interfaces/JwellaryInterface';
import { addToCart } from '../redux/slices/cartSlice';
export default function AddToCartBtn({ jewl }: Jewelery, add: boolean) {
    const dispatch = useDispatch();
    const dispatchCart = () => {
        dispatch(addToCart(jewl));
    }
    return (
        <button className="underline" onClick={dispatchCart}>Add to cart</button>
    )
}
