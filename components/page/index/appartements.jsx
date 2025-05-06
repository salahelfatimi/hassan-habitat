import ScrollAppartements from "./scrollAppartements";

export default function Appartements(){
    return(
        <div className=" bg-secondary py-10">
            <div className=" flex flex-col gap-4 items-center justify-center  px-4 ">
                <h2 className=" font-primary text-2xl lg:text-5xl font-bold uppercase text-white text-center">Nos Appartements à Louer</h2>
                <p className=" font-primary  text-sm lg:text-base text-center text-white ">À la Résidence Eden Marrakech, nous vous proposons plusieurs types d’appartements à louer, tous pensés pour offrir confort, tranquillité et modernité.</p>
            </div>
            <ScrollAppartements/>

        </div>
       
    )
}