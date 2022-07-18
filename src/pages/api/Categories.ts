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
          latitude: 10.386164, 
          longitude: -75.555184,
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
          latitude: 10.392451, 
          longitude: -75.571312,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/4d128a6b-7b07-41fb-9637-8e0fe0157203.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/3e3f797d-5e8e-4571-af57-0c1e6e752dde.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 4,
          'name': 'Linda ilha privativa com cinco amplas suítes',
          'price': 34414,
          'host': 'Juan',
          'localization': 'Angra Dos Reis, Rio de Janeiro, Brasil',
          'description': 'Ilha do Japão (IDJ) é uma ilha privada e exclusiva localizada há 7km da costa de Angra dos Reis (Angra), municipio há 168km da cidade do Rio de Janeiro, Angra integra a região da Costa Verde, região cercada pela Mata Atlântica com mar calmo e cristalino. Ilha do Japão (IDJ) faz parte de uma condecorada rede de empreendimentos customizados e construidos para o perfeito escape. Todas as propriedades criadas e pensadas no viajante mundial. Cada propriedade tem identidade própria, focada em arte, design, aventura e conforto. Acesso dos hóspedes IDJ é uma propriedade residencial e de veraneio, abrangendo 2.500 m² (6.1 acres) oferecendo acomodações luxuosas para até 12 hospedes, enorme área comum, praia privada e água cristalina.',
          latitude: -22.954150,  
          longitude: -44.352170,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/352f9642-7529-4709-8e42-56b53ba35c59.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/e0ec1699-33ec-400a-9fb1-e67b5ba8a190.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/7d665424-c41f-48d4-99da-0897ba3f38fe.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/2062be7a-90f6-4b37-9a90-624e85ac6ddb.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/6fd2f1d6-6ec3-4544-8f15-395268e5778d.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 5,
          'name': 'Ilha do Áraujo, casa de frente pro mar.',
          'price': 260,
          'host': 'Juan',
          'localization': 'Paraty, Rio de Janeiro, Brasil',
          'description': 'A casa está localizada a beira mar, na Ilha do Áraujo - Paraty R.J. Fica a 5 min. do continente e 10km do Centro Histórico. Em frente a Praia Grande, que fica no continente - Km 561, da Rodovia Rio Santos.',
          latitude: 9.342741,  
          longitude: -82.176036,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/bf787e81-ceb5-410e-a8c1-417809b4d461.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/b0c469d1-a5a9-4029-a4ac-50fde1c1ccb3.jpg?im_w=720',
            },
            
          ]
        },
        {
          'id': 6,
          'name': 'Cabana de praia no Palmar Beach Lodge',
          'price': 656,
          'host': 'Juan',
          'rating': 4.75,
          'localization': 'Bastimentos Island, Bocas del Toro Province, Panamá',
          'description': 'Adormeça com os sons suaves do oceano em nossas cabanas de praia. Cada unidade está equipada com pisos de madeira, móveis artesanais feitos de madeira local, cama queen size, banheiro privativo, varanda e ventilador de teto. Como nosso hóspede, você terá acesso a todas as comodidades de Palmar, incluindo cadeiras de praia, bar e restaurante, lounge, balcão de turismo, atividades diárias, aulas de ioga em nosso shala e massagens.',
          latitude: -23.154027,  
          longitude: -44.696853,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/05af7bb0-0bde-4c09-91c4-e4461b2acfcc.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/27c81d32-5a1c-41a0-8409-7d1b95945b85.jpeg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/affe4fd0-43ed-4e71-8211-2f79eb16d54b.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/2b37a1f1-25a0-4f88-b68a-aa9cf4c5a393.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/61619702-e6ac-40a5-b921-aa550ce2304d.jpeg?im_w=720',
            },
          ]
        },
        {
          'id': 7,
          'name': 'Cabana de Lua de Mel',
          'price': 1487,
          'host': 'Juan',
          'rating': 5,
          'localization': 'Bocas del Toro, Bocas del Toro Province, Panamá',
          'description': 'Urraca é o único hotel só para adultos em uma ilha privada em Bocas del Toro. Nossa ilha auto-suficiente de manguezais também abriga a Monkey Island Foundation. Esta cabana de 2 pisos tem 4 camas e acomoda até 6 pessoas; inclui um deque privado, casa de banho privativa com água quente e uma área de estar. Atividades, passeios e serviços de spa disponíveis. Oferecemos um menu baseado em plantas, mediante solicitação.',
          latitude: 9.163244,   
          longitude: -82.112648,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/0e1e098c-1dcc-435c-99fc-288f6b06d7c8.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/361453a4-4e76-47dc-8ff4-e5491269669b.jpg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/bebcc46b-e86d-4f2e-add2-0733cf3954d3.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/98eb02ed-aa09-4dce-9005-05deca91b89c.jpg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/8cb76fb8-e04c-478f-a01a-a0968e49186d.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 8,
          'name': 'Pink Pearl Island Resort',
          'price': 2434,
          'host': 'Juan',
          'localization':'Pearl Cays, Nicarágua',
          'description': 'A ILHA PINK PEARL é uma ilha tropical caribenha privada de 2,5 acres, no Caribe Nicarágua. Possui água azul-turquesa, areia branca em pó, coco e é protegida de mares altos pelos recifes circundantes e ilhas distantes.Seus recifes imaculados o tornam um local ideal para mergulho com snorkel. É um retiro ecoturístico.',
          latitude: 9.163244,   
          longitude: -82.112648,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/a6470903-fac7-47c5-b42d-31f16858b489.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/5c60dc1d-ccf0-416d-96aa-cb9939bedb51.jpg?im_w=720',
            },
          ]
        },
        {
          'id': 9,
          'name': 'Pink Pearl Island Resort',
          'price': 2434,
          'host': 'Juan',
          'localization':'Pearl Cays, Nicarágua',
          'description': 'A ILHA PINK PEARL é uma ilha tropical caribenha privada de 2,5 acres, no Caribe Nicarágua. Possui água azul-turquesa, areia branca em pó, coco e é protegida de mares altos pelos recifes circundantes e ilhas distantes.Seus recifes imaculados o tornam um local ideal para mergulho com snorkel. É um retiro ecoturístico.',
          latitude: 9.163244,   
          longitude: -82.112648,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/a6470903-fac7-47c5-b42d-31f16858b489.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/5c60dc1d-ccf0-416d-96aa-cb9939bedb51.jpg?im_w=720',
            },
          ]
        },
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
      'title': 'Na beira do lago',
      'image': 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
    },
    {
      'title': 'Acampamentos',
      'image': 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
    },
    {
      'title': 'Vistas incríveis',
      'image': 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
    },
    {
      'title': 'Grutas',
      'image': 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
    },
    {
      'title': 'Tropical',
      'image': 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
    },
    {
      'title': 'Cidades Famosas',
      'image': 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
    },
    {
      'title': 'castelos',
      'image': 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
    },
    
  ]
  )
}
