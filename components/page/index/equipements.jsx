"use client";

import {
  Wifi,
  Thermometer,
  UtensilsCrossed,
  Tv,
  WashingMachine,
  BedDouble,
  Sun,
  MoveVertical,
  ParkingCircle,
  ShieldCheck
} from "lucide-react";

const equipements = [
  {
    icon: Wifi,
    title: "Wi-Fi haut débit",
    description: "Restez connecté à tout moment grâce à une connexion internet rapide.",
  },
  {
    icon: Thermometer,
    title: "Climatisation / Chauffage",
    description: "Un confort optimal en été comme en hiver.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cuisine équipée",
    description: "Réfrigérateur, micro-ondes, ustensiles et plus encore.",
  },
  {
    icon: Tv,
    title: "Télévision à écran plat",
    description: "Divertissement assuré avec une TV moderne.",
  },
//   {
//     icon: WashingMachine,
//     title: "Machine à laver",
//     description: "Lavez votre linge facilement durant votre séjour.",
//   },
  {
    icon: BedDouble,
    title: "Linge de lit et serviettes",
    description: "Inclus pour votre confort dès votre arrivée.",
  },
  {
    icon: Sun,
    title: "Balcon ou terrasse",
    description: "Profitez d’un espace extérieur agréable (selon l’appartement).",
  },
  {
    icon: MoveVertical,
    title: "Ascenseur",
    description: "Accès facile aux étages pour tous.",
  },
  {
    icon: ParkingCircle,
    title: "Parking à proximité",
    description: "Places de stationnement privées ou publiques disponibles.",
  },
  {
    icon: ShieldCheck,
    title: "Système de sécurité",
    description: "Entrée sécurisée avec digicode ou vidéosurveillance.",
  },
];

export default function EquipementsSection() {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <h2 className=" font-primary text-xl lg:text-5xl font-bold uppercase text-secondary text-center"> Équipements disponibles </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {equipements.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="bg-white border-secondary border-2 rounded-2xl shadow p-6 hover:shadow-lg transition" >
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h3 className=" font-semibold text-secondary uppercase font-primary mb-2">{title}</h3>
              <p className="text-sm font-medium text-gray-600 font-primary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
