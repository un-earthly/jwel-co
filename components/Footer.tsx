import React from 'react'
import Link from 'next/link'
export default function Footer() {
    return (
        <footer className="footer items-center font-semibold justify-center p-4 bg-neutral text-neutral-content">
            <Link href="/"><img src="/logo.png" className='cursor-pointer block mx-auto h-12 w-12' alt="" /></Link>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    )
}
