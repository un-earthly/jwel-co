import React from 'react'
import Link from 'next/link'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
type Props = {
    children: React.ReactNode;
};
export default function Navbar({ children }: Props) {
    const menuLinks = <>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <MenuAlt1Icon height={24} />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <label htmlFor="my-drawer-3" className="absolute right-2 top-2">
                        <XIcon height={24} />
                    </label>
                    {menuLinks}
                </ul>

            </div>
        </div>
    )
}
