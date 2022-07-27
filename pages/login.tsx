import Head from 'next/head'
import Link from 'next/link';
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Social from '../components/Social';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import Router, { useRouter } from 'next/router';

export default function Login() {

    type Inputs = {
        email: string,
        pass: string,
    };

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const router = useRouter()
    const [login, user, loading, err] = useSignInWithEmailAndPassword(auth);
    const onSubmit: SubmitHandler<Inputs> = ({ email, pass }) => login(email, pass);
    user ? (Router.push(`${router.query.from}`), toast.success(`Logged in as ${user?.user.displayName}`)) : toast.error(err?.message);

    return (
        <div>

            <Head>
                <title>Jwel Co - Your Luxurious Jewellery Partner.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <form className="space-y-5 p-10 lg:w-1/2 lg:mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        className="w-full p-4 bg-neutral text-neutral-content focus:outline-none"
                        {...register("email", { required: true })}
                        placeholder="Email address"
                    />
                    {errors.email && <span className='text-error'>This field is required</span>}

                </div>

                <div>
                    <input
                        type="password"
                        className="w-full p-4 bg-neutral text-neutral-content focus:outline-none"
                        placeholder="Password"
                        {...register("pass", { required: true })}

                    />
                    {errors.pass && <span className='text-error'>This field is required</span>}

                </div>
                <p>New Here? <Link href="/signup">Register Now</Link></p>
                <button
                    type="submit"
                    className='btn w-full'

                >

                    Sign in
                </button>

                <Social />
            </form>


        </div >
    )
}
