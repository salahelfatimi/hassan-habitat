'use client'
import Lenis from "lenis";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer(){
    // useEffect( () => {
    //     const lenis = new Lenis()
    //     function raf(time) {
    //       lenis.raf(time)
    //       requestAnimationFrame(raf)
    //     }
    //     requestAnimationFrame(raf)
    // }, [])
    return(
        <footer className="" >
            <div className="bg-black py-6" >
                <div className="   container mx-auto max-w-7xl px-5">
                    <div className="container mx-auto  flex flex-col-reverse gap-6 lg:flex-row items-center justify-between ">
                        <p className={`select-none flex   flex-col lg:flex-row gap-1  font-medium items-center font-primary capitalize text-center lg:text-start text-white `}> Copyright &copy; {new Date().getFullYear()} . Tous les droits sont réservés <span className=" text-secondary   "> la Résidence Eden Marrakech </span> fait par <Link href={'https://www.traficgenius.com/'} target="_blank" rel="noopener noreferrer" className=" underline underline-offset-4">trafic genius </Link>  </p>
                        <div className="flex gap-6">
                            <Instagram size={30} className=" stroke-[#fff]" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}