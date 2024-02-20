"use client"

import Image from "next/image"
import Link from "next/link"
import menuIcon from '../app/assets/menu_btn.png'
import closeIcon from '../app/assets/close_icon.png'
import { useState } from "react"
import Menu from '../components/menu'

const Navbar = () => {

    const [ModalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
        <Menu ModalIsOpen={ModalIsOpen}/>
            <div className="flex justify-between items-center py-[24px] max-sm:py-[12px]">
                <Link href={"/"}>
                    <h1>logo</h1>
                </Link>
                <div className="flex max-sm:hidden items-center gap-14">
                    <nav>
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link href={"Biz haqimizda"}>Biz haqimizda</Link>
                            </li>
                            <li>
                                <Link href={"Hamkorlarimiz"}>Hamkorlarimiz</Link>
                            </li>
                            <li>
                                <Link href={"Xizmatlar"}>Xizmatlar</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="hover:bg-[#1A906B] hover:text-[#fff] transition-all bg-[#cdfced] p-3 rounded-xl">
                        <span>+998 (99) 200 33 00</span>
                    </button>
                </div>
                <button className="hidden max-sm:block" onClick={() => setModalIsOpen(!ModalIsOpen)}>
                    {ModalIsOpen ? <Image className="w-[30px]" src={closeIcon} alt="close icon"></Image> : <Image className="w-[30px]" src={menuIcon} alt="menu icon"></Image>}
                </button>
            </div>
        </>
    )
}

export default Navbar
