import ScrollAppartements from "./scrollAppartements";

export default function Appartements(){
    return(
        <>
            <div className=" flex flex-col gap-4 items-center justify-center pt-4 px-4 ">
                <h2 className=" font-primary text-2xl lg:text-5xl font-bold uppercase text-secondary text-center">Nos Appartements à Louer</h2>
                <p className=" font-primary  text-sm lg:text-base text-center">À la Résidence Eden Marrakech, nous vous proposons plusieurs types d’appartements à louer, tous pensés pour offrir confort, tranquillité et modernité.</p>
            </div>
            <ScrollAppartements/>

        </>
       
    )
}