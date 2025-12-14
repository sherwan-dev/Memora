'use client'
import LanguageSelector from "../selector/language-selector/language-selector"
import MobileLanguageSelector from "../selector/mobile-language-selector/mobile-language-selector";
import BurgerMenuIcon from "./burger-menu-icon";
import { useState } from "react";

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(prev => !prev);
    }
    return (
        <div className="h-container w-full border-b-(--default-border-color) border-b lg:hidden">
            <div className="content flex justify-start items-center w-full gap-8">
                <BurgerMenuIcon onClick={toggleMenu} open={menuOpen} />
                <div className="logo-container max-w-fit select-none h-full "><a href="/" className="logo decoration-0 hover:decoration-0 block">M</a></div>
                {menuOpen && 
                <div className="link-item h-full fixed top-15 bottom-0 right-0 left-0 z-1000 p-3">
                    <ul className="flex gap-2 items-stretch h-full flex-col">
                        <li className="flex w-full items-center"><a href="#" className="flex h-full items-center  font-black hover:text-(--blue-hover)">Home</a></li>
                        <li className=" flex w-full"><a href="#" className="flex h-full   items-center  font-black hover:text-(--blue-hover)">Library</a></li>
                        <li className="group flex w-full  items-center cursor-pointer"><MobileLanguageSelector/></li>
                        <li className="flex items-center justify-center"><a href="" className="  text-white bg-(--blue) hover:bg-(--blue-hover) focus:ring-4 focus:ring-blue-200 font-black rounded-lg text-sm px-5 py-2.5 focus:outline-none w-[50%] ">Get Started</a></li>
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}