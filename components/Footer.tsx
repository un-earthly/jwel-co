import React from 'react'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="footer items-center justify-center p-4 bg-neutral text-neutral-content">
            <Image src="/logo.png" height={80} width={80} alt="" />
            <p>Copyright © 2022 - All right reserved</p>
        </footer>
    )
}
