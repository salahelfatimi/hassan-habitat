import { ChevronRight, House, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SactionNumbers from "./sactionNumbers";
import Appartements from "./appartements";
import Faq from "@/components/tools/faq";

export default function Page(){
    return(
        <div>
            <div className=" relative lg:m-8 lg:h-[90vh] h-screen rounded-4xl">
                <div className=" bg-black opacity-60 absolute inset-0 lg:rounded-4xl lg:border-4 border-secondary"></div>
                <video alt="la Résidence Eden Marrakech" title="la Résidence Eden Marrakech" width="100%" height="100%" autoPlay loop playsInline muted className="lg:border-4 border-secondary w-full h-full object-cover lg:rounded-4xl shadow-2xl" >
                    <source src="/vid/header.mp4" type="video/mp4" />
                </video>
                <div className=" z-20 flex p-4 flex-col gap-4 items-center justify-center container mx-auto absolute inset-0">
                    <h1 className=" text-center text-xl lg:text-5xl font-bold font-primary uppercase text-white ">Bienvenue à la Résidence Eden Marrakech</h1>
                    <p className="text-center text-sm text-white font-primary">Située dans un cadre calme et privilégié, la Résidence Eden Marrakech propose à la location 50 appartements modernes et confortables .</p>
                    <Link href={'#'} className=" bg-secondary text-white font-primary px-6 py-3 text-sm rounded-full font-semibold uppercase hover:bg-transparent border-2 border-secondary hover:border-white hover:text-white duration-700 flex items-center justify-center">Découvrez nos appartements<ChevronRight /></Link>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center gap-2">
                    <Mouse size={40} className=" stroke-white w-24 animate-bounce" />                    
                    <span className=" font-primary text-white text-xs uppercase">défiler vers le bas</span>
                </div>
            </div>
            <div>
                <SactionNumbers/>
            </div>
            <Appartements/>
            <div className=" relative py-20 overflow-hidden h-[70vh] lg:m-20 shadow-2xl lg:rounded-4xl ">
                <div className="absolute inset-0 z-0">
                    <Image src="/img/appartementsCover.jpeg" layout="fill" objectFit="cover" className=" h-[70vh]" quality={50}  alt="Eco Vert Europé" title="Eco Vert Europé" />
                    <div className="absolute inset-0 bg-black opacity-60"></div> 
                </div>
                <div className="absolute inset-0 gap-3 bg-opacity-60 flex flex-col  text-white items-center justify-center px-4">
                        <h1 className="text-2xl lg:text-5xl font-bold  font-primary text-center">Louez votre appartement idéal en quelques clics</h1>
                        <p className="text-sm lg:text-xl font-primary text-center">
                            Découvrez nos appartements confortables et entièrement équipés à des prix fixes. Réservation simple et rapide.
                        </p>
                        <a href="/appartements" className="font-primary bg-white hover:bg-secondary text-black hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center w-fit text-sm lg:text-base" >
                            Voir les appartements <ChevronRight />
                        </a>
                </div>
            </div>
            <div className="py-10 px-4 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className=" lg:w-1/2">
                    <Image src={'/img/apprtement.jpg'} width={1920} height={1080} className="shadow-2xl rounded-4xl border-4 border-secondary object-cover w-full h-full" alt="la Résidence Eden Marrakech" title="la Résidence Eden Marrakech"/>
                </div>
                <div className=" lg:w-1/2 flex flex-col gap-8 justify-between">
                    <h2 className=" font-primary font-bold text-xl lg:text-3xl uppercase text-secondary">Pourquoi choisir la Résidence Eden Marrakech ?</h2>
                    <ul className=" lg:*:text-base *:text-sm space-y-4 list-disc list-inside font-primary">
                        <li>50 appartements modernes prêts à louer</li>
                        <li>Résidence fermée et sécurisée avec gardiennage 24h/24</li>
                        <li>Espaces verts et parties communes entretenues</li>
                        <li>Parking privé disponible pour chaque logement</li>
                        <li>Emplacement idéal : calme, proche des commodités</li>
                        <li>Appartements lumineux, bien agencés et bien isolés</li>
                    </ul>
                    <Link href={'#'} className=" bg-secondary w-fit text-white font-primary px-6 py-3 text-sm rounded-full font-semibold uppercase hover:bg-transparent border-2  hover:border-secondary hover:text-secondary duration-700 flex items-center justify-center">Découvrez nos appartements<ChevronRight /></Link>
                </div>
            </div>
            
            <Faq/>
        </div>
    )
}