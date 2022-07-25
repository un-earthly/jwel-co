import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Social from '../components/Social';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth"
import auth from '../firebase.init';
import { toast } from 'react-toastify';
export default function signin() {

    type Inputs = {
        name: string,
        email: string,
        pass: string,
    };
    const [registerUser, user, loading, err] = useCreateUserWithEmailAndPassword(auth)
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async ({ name, email, pass }) => {
        await registerUser(email, pass)
        await updateProfile({ displayName: name })
    }

    if (user?.user.displayName) {
        toast.success(`Registered user ${user.user.displayName || error?.message || err?.message}`)
    }
    return (
        <div>

            <Head>
                <title>Register - Jwel Co.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <form className="space-y-5 p-10 lg:w-1/2 lg:mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        className="w-full p-4 bg-gray-900/50 focus:outline-none"
                        {...register("name", { required: true })}
                        placeholder="Full Name"
                    />
                    {errors.email && <span className='text-error'>This field is required</span>}

                </div>
                <div>
                    <input
                        type="email"
                        className="w-full p-4 bg-gray-900/50 focus:outline-none"
                        {...register("email", { required: true })}
                        placeholder="Email address"
                    />
                    {errors.email && <span className='text-error'>This field is required</span>}

                </div>

                <div>
                    <input
                        type="password"
                        className="w-full p-4 bg-gray-900/50 focus:outline-none"
                        placeholder="Password"
                        {...register("pass", { required: true })}

                    />
                    {errors.pass && <span className='text-error'>This field is required</span>}

                </div>
                <p>Already Here? <Link href="/login">Login Now</Link></p>
                <button
                    type="submit"
                    className='btn w-full'

                >

                    Register
                </button>

                <Social />
            </form>


        </div >
    )
}
