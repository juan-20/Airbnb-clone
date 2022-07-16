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
          'name': 'Ilha deslumbrante no mar com piscina KALUA',
          'price': 11.748,
          'host': 'Juan',
          'rating': 4.8,
          'localization': 'Provincia de Cartagena, Bolívar, Colômbia',
          'description': 'Aproveite nossa ilha privada exclusiva localizada nas Ilhas Rosario. O lugar tem um estilo tropical que combina com a bela paisagem, perfeito para se desconectar do cotidiano enquanto é cercado por um mar de sete cores. A ilha tem 4 quartos dos quais você pode sentir o cheiro do mar, e uma piscina para desfrutar do lugar paradisíaco enquanto você sente o vento em seu rosto... Aproveite nosso oásis.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/7cf358b9-e8c5-4067-9ac5-014784387e22.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/5b50ac57-8eca-4b8b-be51-43a7155ed37a.jpeg?im_w=720',
            },
        ]
        },
        {
          'id': 2,
          'name': 'NEW ISLA PRIVADA',
          'price': 6.689,
          'host': 'Juan',
          'rating': 5.0,
          'localization': 'Provincia de Cartagena, Bolívar, Colômbia',
          'description': 'A Ilha Baru é um lugar mágico nas Ilhas Baru, em Cartagena, ideal para se desconectar da cidade, sua localização é estratégica porque está completamente cercada por mar, o que a torna uma verdadeira ilha. A casa está em 2 andares com 5 quartos confortáveis com ar condicionado e 4 casas de banho que servem os hóspedes, sala aberta, sala de jantar, cozinha, áreas de convés para banhos de sol ou pôr do sol e áreas verdes em toda a ilha.O preço inclui 3 pessoas ao serviço dos hóspedes.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/4d128a6b-7b07-41fb-9637-8e0fe0157203.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/3e3f797d-5e8e-4571-af57-0c1e6e752dde.jpg?im_w=1200',
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
