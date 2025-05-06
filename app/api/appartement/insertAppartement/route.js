// app/api/insertAppartement/route.js
import { PrismaClient } from '@prisma/client'
import { utapi } from "@/app/server/uploadthing";

const prisma = new PrismaClient()

export async function POST() {
  const response = await utapi.uploadFiles(file);

  try {
    const fakeAppartements = [
      {
        type: 'Studio',
        surface: '30m²',
        pieces: 1,
        capacite: '2 personnes',
        prix_total: 450.00,
        disponible: true,
        etage: 2,
        images: {
          create: [
            { url: 'https://source.unsplash.com/random/800x600?studio' },
            { url: 'https://source.unsplash.com/random/800x600?interior' },
          ],
        },
      },
      {
        type: 'Appartement T2',
        surface: '50m²',
        pieces: 2,
        capacite: '3 personnes',
        prix_total: 700.00,
        disponible: true,
        etage: 3,
        images: {
          create: [
            { url: 'https://source.unsplash.com/random/800x600?apartment' },
            { url: 'https://source.unsplash.com/random/800x600?kitchen' },
          ],
        },
      },
      {
        type: 'Appartement T3',
        surface: '75m²',
        pieces: 3,
        capacite: '4 personnes',
        prix_total: 950.00,
        disponible: false,
        etage: 1,
        images: {
          create: [
            { url: 'https://source.unsplash.com/random/800x600?bedroom' },
            { url: 'https://source.unsplash.com/random/800x600?bathroom' },
          ],
        },
      },
    ]

    for (const data of fakeAppartements) {
      await prisma.appartement.create({ data })
    }

    return new Response(JSON.stringify({ message: 'Fake appartements inserted' }), {
      status: 201,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
