import Link from "next/link";

export default function Navbar(){
    return(
        <div className=" bg-secondary w-full h-screen p-6">
            <h1 className=" font-primary text-white text-xl font-semibold uppercase">dashboard Admin</h1>
            <div className=" flex flex-col justify-center py-10 gap-4">
                <Link className=" font-primary text-white" href={'/'}>Accueil</Link>
                <Link className=" font-primary text-white" href={'/Client'}>Voir toutes les réservations</Link>
                <Link className=" font-primary text-white" href={'/ajouter-appartements'}>Voir tous les appartements</Link>
            </div>
        </div>
    )
}