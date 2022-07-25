import React from 'react'
import Link from 'next/link'
import { MenuAlt1Icon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
type Props = {
    children: React.ReactNode;
};
export default function Navbar({ children }: Props) {
    const [user, loading, err] = useAuthState(auth)
    const menuLinks = <>
        <Link href="/">Home</Link>

        {
            user ? <div className='flex flex-col items-center'>
                {/* <div className="dropdown">
                    <label className="btn m-1 cursor-pointer">
                       
                    </label>
                    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        </ul>
                    </div> */}

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="cursor-pointer m-1">
                        <div className="avatar">
                            <div className="w-8 h-8 bg-base-100 rounded-full ring ring-teal-400">
                                {
                                    user.photoURL ? <img src={user.photoURL} alt="not found" /> : <span className='block text-center text-xl uppercase'>{user.displayName?.slice(0, 1)}</span>
                                }
                            </div>
                        </div>

                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow space-y-3 bg-base-100 rounded-box w-52">
                        <li className="mx-auto"><a>{user.displayName}</a></li>
                        <button onClick={() => signOut(auth)} className="btn">Sign Out</button>
                    </ul>
                </div>
            </div> : <Link href="/login">Login</Link>
        }
        <Link href="/cart">
            <div className="indicator">
                <span className="indicator-item h-5 w-5 badge">{0}</span>
                <ShoppingCartIcon className="cursor-pointer" height={25} width={25} />
            </div>

        </Link>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-200 justify-between p-5 sticky -top-3 z-50">
                    <div className="lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <MenuAlt1Icon height={24} />
                        </label>
                    </div>
                    <div className="font-semibold text-xl"><Link href="/">JWEL CO.</Link></div>
                    <div className="hidden lg:block">
                        <ul className="menu flex items-center justify-center font-semibold space-x-5 menu-horizontal">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 space-y-5">
                    <label htmlFor="my-drawer-3" className="absolute right-2 top-2">
                        <XIcon height={24} />
                    </label>
                    {menuLinks}
                </ul>

            </div>
        </div>
    )
}
