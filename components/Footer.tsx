import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    return (
        <footer className="footer items-center font-semibold justify-center p-4 bg-neutral text-neutral-content">
            <Link href="/"><Image src="/logo.png" className='cursor-pointer' height={80} width={80} alt="" /></Link>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    )
}
