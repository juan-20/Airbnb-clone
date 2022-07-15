// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Categories } from '../../types/Categories.type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Categories[]>
) {
  res.status(200).json([
    {
      'title': 'Ilhas',
      'image': 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
      'properties': [
        {
          'id': 1,
          'name': 'g',
          'price': 1000,
          'host': 'Juan',
          'rating': 5,
          'localization': 'longe',
          'description': 'test',
          images: [
            {
            url: 'hhh',
            },
            {
            url: 'hhh',
            },
        ]
        }
      ]
    },
    {
      'title': 'Praia',
      'image': 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
    },
    {
      'title': 'Piscinas Incríveis',
      'image': 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
    },
    {
      'title': 'Piscinas Incríveis',
      'image': 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
    },
    {
      'title': 'Uau!',
      'image': 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
    },
    {
      'title': 'Parques nacionais',
      'image': 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
    },
    {
      'title': 'Microcasas',
      'image': 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
    },
    {
      'title': 'Design Diferenciado',
      'image': 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
    },
    {
      'title': 'Ártico',
      'image': 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
    },
    {
      'title': 'Casas triangulares',
      'image': 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
    },
    {
      'title': 'Casas na árvore',
      'image': 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Cabanas',
      'image': 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
    {
      'title': 'Surfe',
      'image': 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
    },
  ]
  )
}
