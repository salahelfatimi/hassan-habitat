'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from 'next/link';
const fakeAppartements = [
    {
      type: 'Studio',
      surface: '30m²',
      pieces: 1,
      capacite: '2 Personnes',
      prix_total: 450.00,
      disponible: true,
      etage: 2,
      images: [
        { url: '/img/apprtement.jpg' },
        { url: '/img/apprtement.jpg' },
    ],
    },
    {
      type: 'Appartement T2',
      surface: '50m²',
      pieces: 2,
      capacite: '3 Personnes',
      prix_total: 700.00,
      disponible: true,
      etage: 3,
      images: [
        { url: '/img/apprtement.jpg' },
        { url: '/img/apprtement.jpg' },
        ],
    },
    {
      type: 'Appartement T3',
      surface: '75m²',
      pieces: 3,
      capacite: '4 Personnes',
      prix_total: 950.00,
      disponible: false,
      etage: 1,
      images: [
          { url: '/img/apprtement.jpg' },
          { url: '/img/apprtement.jpg' },
      ],
    },
    {
        type: 'Appartement T3',
        surface: '75m²',
        pieces: 3,
        capacite: '4 Personnes',
        prix_total: 950.00,
        disponible: false,
        etage: 1,
        images: [
            { url: '/img/apprtement.jpg' },
            { url: '/img/apprtement.jpg' },
        ],
    },
    {
        type: 'Appartement T3',
        surface: '75m²',
        pieces: 3,
        capacite: '4 Personnes',
        prix_total: 950.00,
        disponible: false,
        etage: 1,
        images: [
            { url: '/img/apprtement.jpg' },
            { url: '/img/apprtement.jpg' },
        ],
    },
  ]
  export default function ScrollAppartements() {
    const [immobilierCity, setImmobilierCity] = useState(null);
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 0.7 })
    ]);

    return (
        <div>
            
            <div className="py-10 ">
                <div className="overflow-hidden " ref={emblaRef}>
                    <div className="flex flex-row gap-6 pl-6">
                        {fakeAppartements.map((appartement, index) => (
                            <div key={index} className="min-w-[25rem] lg:min-w-[30rem] h-auto cursor-grab active:cursor-grabbing  ">
                                <Image
                                    src={appartement.images[0].url}
                                    width={1920}
                                    height={1080}
                                    className="w-[25rem] lg:min-w-[30rem] object-cover rounded-3xl border-4 border-white"
                                    alt={`Image of ${appartement.type}`}
                                />
                                <div className="mt-4 font-primary px-2">
                                    <div className=' flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
                                        <p className=' text-2xl text-white font-medium'>{appartement.prix_total} € / Mois</p>
                                        <div className=' text-xs lg:text-sm *:bg-white *:text-secondary *:px-2 *:py-1 *:rounded-4xl flex flex-row gap-2 font-medium ' >
                                            <p>{appartement.surface}</p>
                                            <p>{appartement.capacite}</p>
                                            <p>Étage : {appartement.etage}</p>

                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold pt-2 text-white">{appartement.type}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-center pt-8'>
                        <Link href={'#'} className=' bg-white py-2 px-6  w-fit font-primary font-medium rounded-4xl text-secondary hover:text-white border-white border-2 hover:bg-secondary duration-700 capitalize'>Voir tous les appartements</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}