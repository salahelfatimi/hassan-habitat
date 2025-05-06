import Image from "next/image";
import Form from "./form";

export default function ContactPage(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center" >
                <Image src={'/img/appartementsCover.jpeg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className=" absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className=" relative z-20 flex flex-col gap-4 container">
                    <h1 className="font-primary font-medium text-6xl lg:text-8xl text-white" >Contactez-Nous</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl font-primary">Une question, un besoin d'information ou envie de réserver un appartement ? </p>
                </div>
            </div>
            <div>
                <Form/>
            </div>
            <div className=" flex flex-col items-center gap-6 pt-10 text-center ">
                <h2 className=" container text-3xl lg:text-5xl font-bold uppercase text-secondary font-primary">Nous trouver sur Google Maps</h2>
                <p className="container text- lg:text-lg font-primary">Localisez-nous facilement sur la carte et visitez notre site. Besoin d'un itinéraire ? </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.963765957012!2d-7.970074800000001!3d31.695428999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafed9b40222857%3A0x3d11a22de5e73fe3!2sCaravan%20Serai!5e1!3m2!1sen!2sma!4v1741949042326!5m2!1sen!2sma" className=" w-full h-[40rem]" frameBorder="0"/>

            </div>

        </div>
      
    )
}