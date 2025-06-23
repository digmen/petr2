import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BurgerMenu from '../components/shared/BurgerMenu'

export default function Navbar() {
    return (
        <header className='flex items-center justify-between w-full absolute top-0 left-0 z-50 px-[120px] pt-[30px]'>
            <article className='flex items-center gap-[13px]'>
                <Image
                    src="/images/navbar/logo.svg"
                    alt="Aventi Studio Logo"
                    width={64}
                    height={43}
                    className="w-[64px] h-[43px] md:w-[64px] md:h-[43px] lg:w-[64px] lg:h-[43px] xl:w-[64px] xl:h-[43px]"
                />
                <h1 className='font-[EuropeextBold] text-white'>
                    AVENTIA
                    <br />
                    STUDIO
                </h1>
            </article>
            <article className='flex items-center gap-[37px]'>
                <Link
                    href="/"
                    className="text-[15px] font-[EuropeextNormal] bg-[#FFFFFF] rounded-[50px] w-[120px] h-[43px] p-[16px] flex items-center justify-center text-[#000000]"
                >
                    Let's Talk
                </Link>
                <BurgerMenu />
            </article>
        </header>
    )
}
