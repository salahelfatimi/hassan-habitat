'use client';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag, ShoppingBasket, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const navbarRef = useRef(null);
    const pathname = usePathname(); // Get the current route
    const navbarPhoneRef = useRef(null)
    const linksRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [logoSrc, setLogoSrc] = useState('/img/logo.png');
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const navbar = navbarRef.current;
        const links = linksRef.current;
        const handleScroll = () => {
            if (window.scrollY > 50) {
                gsap.to(navbar, { backgroundColor: "white", duration: 0.6 , paddingTop:'1rem' });
                gsap.to(links, { color: "black", duration: 0.6});
                setLogoSrc('/img/logo_color.png');
            } else {
                gsap.to(navbar, { backgroundColor: "transparent", duration: 0.6 , paddingTop:'3rem' });
                gsap.to(links, { color: "white", duration: 0.6 });
                setLogoSrc('/img/logo.png');
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const navbar = navbarPhoneRef.current;
        const links = linksRef.current;
        const handleScroll = () => {
            if (window.scrollY > 50) {
                gsap.to(navbar, { backgroundColor: "white", duration: 0.6  });
                gsap.to(links, { color: "black", duration: 0.6 });
                setLogoSrc('/img/logo_color.png');
            } else {
                gsap.to(navbar, { backgroundColor: "transparent", duration: 0.6  });
                gsap.to(links, { color: "white", duration: 0.6 });
                setLogoSrc('/img/logo.png');
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setOpenNav(!openNav);
        if (!openNav) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: "100%",
                duration: 0.5,
                ease: "power3.in",
            });
        }
    };

    const ItemsNavbar = [
        { name: 'Accueil', link: '/' },
        { name: 'Nos Appartements', link: '/nos-appartements' },
        // { name: 'Équipements', link: '/Équipements' },
        { name: 'Blog', link: '/blogs' },
        { name: 'À propos', link: '/a-propos' },
        { name: 'Contactez-nous', link: '/contactez-nous' },
    ];

    return (
        <header>
            <div ref={navbarRef} className="fixed z-50 top-0 left-0 w-full px-8 lg:pt-12 py-4 hidden lg:block">
                    <div className="flex flex-row gap-4 items-center justify-between  px-14">
                        <Image src={logoSrc} width={500} height={500} className="w-20" alt="la Résidence Eden Marrakech" title="la Résidence Eden Marrakech" />
                        <ul ref={linksRef} className="flex space-x-4 text-white">
                            {ItemsNavbar.map((item, index) => (
                                <Link href={item.link} key={index} className={`cursor-pointer font-medium font-primary hover:border-b-2 underline-offset-2 ${pathname === item.link ? 'border-b-2 border-secondary text-secondary ' : ''}`}>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
            </div>
            <div ref={navbarPhoneRef} className="fixed z-50 top-0 left-0 w-full px-8 lg:pt-12 py-2 lg:hidden block ">
                    <div className="flex flex-row gap-4 items-center justify-between ">
                        <Image src={logoSrc} width={500} height={500} className="w-20" alt="la Résidence Eden Marrakech" title="la Résidence Eden Marrakech" />
                        <div onClick={toggleMobileMenu} className="bg-secondary p-1">
                            <Menu className="stroke-white" size={35} />
                        </div>
                    </div>
                    <div ref={mobileMenuRef} className="fixed top-0 right-0 w-full h-full bg-white z-40 transform translate-x-full flex flex-col items-center justify-center" >
                        {/* Close Button */}
                        <button onClick={toggleMobileMenu} className="absolute top-4 right-4 bg-secondary text-white p-2 rounded-full" >
                            <X size={30} />
                        </button>
                        <ul className="flex flex-col space-y-6 text-black text-center">
                            {ItemsNavbar.map((item, index) => (
                                <Link onClick={toggleMobileMenu} href={item.link} key={index} className={`cursor-pointer font-medium font-primary hover:border-b-2 underline-offset-2 ${pathname === item.link ? 'border-b-2 border-secondary text-secondary' : ''}`}>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                        
                    </div>
            </div>
        </header>
       
    );
}