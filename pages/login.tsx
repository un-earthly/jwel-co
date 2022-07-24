import Head from 'next/head'
import Link from 'next/link';
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


export default function Login() {

    type Inputs = {
        email: string,
        pass: string,
    };

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
                <p>New Here? <Link href="/signup">Register Now</Link></p>
                <button
                    type="submit"
                    className='btn w-full'

                >

                    Sign in
                </button>

                <div className="divider">OR</div>

                <a
                    className='btn flex'

                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-3.5 h-3.5 mr-2"
                    >
                        <path
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        /></svg>
                    Continue with Facebook
                </a>
                <a
                    className='btn flex'
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>Continue with Twitter
                </a>
            </form>


        </div >
    )
}
