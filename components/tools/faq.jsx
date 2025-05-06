'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
        {
          question: "Les prix affichés sont-ils définitifs ?",
          answer: "Les prix affichés sont indicatifs et peuvent varier selon la durée de séjour, la saison ou les services demandés. Pour un tarif personnalisé, veuillez nous contacter ou demander un devis."
        },
        {
          question: "Quels types d'appartements proposez-vous ?",
          answer: "Nous proposons différents types d'appartements : studios, F2, F3, F4… adaptés aux besoins des couples, familles ou professionnels."
        },
        {
          question: "Les appartements sont-ils meublés ?",
          answer: "Oui, tous nos appartements sont entièrement meublés et équipés pour un séjour confortable (lit, cuisine, électroménager, etc.)."
        },
        {
          question: "Quels équipements sont inclus ?",
          answer: "Chaque logement dispose d’équipements modernes : Wi-Fi, TV, cuisine équipée, climatisation… Les équipements exacts sont listés dans chaque fiche appartement."
        },
        {
          question: "Y a-t-il un dépôt de garantie ?",
          answer: "Oui, un dépôt de garantie peut être demandé selon la durée du séjour. Les modalités vous seront précisées au moment de la réservation."
        },
        {
          question: "Puis-je visiter l'appartement avant de réserver ?",
          answer: "Oui, sur demande, nous pouvons organiser une visite (physique ou virtuelle) avant la signature du contrat."
        },
        {
          question: "Comment puis-je vous contacter ?",
          answer: "Vous pouvez nous contacter via le formulaire de contact, par téléphone ou WhatsApp. Toutes les informations sont disponibles sur notre page \"Contact\"."
        },
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons les virements bancaires, espèces, et certains paiements en ligne. Les détails vous seront fournis lors de la réservation."
        },
        {
          question: "Et si je dois annuler ma réservation ?",
          answer: "L'annulation est possible selon nos conditions générales. Nous vous recommandons de lire notre politique d’annulation ou de nous contacter pour plus de détails."
        }
    ];
      
    return(
        <div className="bg-secondary py-10">
            <div className="container mx-auto px-4 flex flex-col justify-between gap-4 items-center  max-w-7xl ">
                <h2  className="  text-3xl lg:text-6xl  mb-4 font-primary font-bold text-white uppercase  text-center "> Foire Aux Questions (FAQ) </h2>
                <div className=" flex flex-col gap-6 w-full ">
                    {faqData.map((faq, index) => (
                        <div key={index} className="flex flex-col p-4 gap-2 border-b-2 last:border-b-0 border-white text-white">
                            <h3 onClick={()=>(setOpenFaq(index))} className=" text-sm lg:text-2xl font-primary font-medium text-white cursor-pointer"> - {faq.question}</h3>
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out text-white ${openFaq == index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="font-primary text-xs lg:text-base">{faq.answer}</p>
                            </div>                    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}