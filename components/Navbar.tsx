import React from 'react'
import Link from 'next/link'
import { MenuAlt1Icon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
type Props = {
    children: React.ReactNode;
};
export default function Navbar({ children }: Props) {
    const menuLinks = <>
        <Link href="/">Home</Link>

        <Link href="/login">Sign in</Link>
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
                        <ul className="menu font-semibold space-x-5 menu-horizontal">
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
