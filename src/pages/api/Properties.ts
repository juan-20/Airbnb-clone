// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PropertiesType } from '../../types/Categories.type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertiesType[]>
) {
  res.status(200).json([
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
            id: 1,
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
            id: 1,
            },
            {
            url: 'https://a0.muscache.com/im/pictures/3e3f797d-5e8e-4571-af57-0c1e6e752dde.jpg?im_w=1200',
            id: 2
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
          },
          {
            url: 'https://a0.muscache.com/im/pictures/361453a4-4e76-47dc-8ff4-e5491269669b.jpg?im_w=720',
            id: 2,
          },
          {
            url: 'https://a0.muscache.com/im/pictures/bebcc46b-e86d-4f2e-add2-0733cf3954d3.jpg?im_w=1200',
            id: 3,
          },
          {
            url: 'https://a0.muscache.com/im/pictures/98eb02ed-aa09-4dce-9005-05deca91b89c.jpg?im_w=720',
            id: 4,
          },
          {
            url: 'https://a0.muscache.com/im/pictures/8cb76fb8-e04c-478f-a01a-a0968e49186d.jpg?im_w=1200',
            id: 5,
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
            id: 1,
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
            id: 1,
            },
            {
            url: 'https://a0.muscache.com/im/pictures/5c60dc1d-ccf0-416d-96aa-cb9939bedb51.jpg?im_w=720',
            },
          ]
        },
        {
          'id': 10,
          'name': 'SALVADOR QUARTO FRENTE AO MAR',
          'price': 50,
          'host': 'Juan',
          'rating': 5,
          latitude: -13.007651,  
          longitude: -38.508267,
          'localization': 'Salvador',
          'description': 'Ótimo para estudante,( Mulher de preferencia )frente ao mar ,50 metros praia ,200 metros Shopping Barra,...comercio farto e variado com vários supermercados ,restaurantes ,lanchonetes e farmácias,....varias agencias bancarias....calçadão na orla para pratica de atividades físicas.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/777e0d41-ec20-4a74-b27b-799f84f01287.jpg?im_w=720',
            id: 1,
            },
            {
            url: 'https://a0.muscache.com/im/pictures/c374e070-f1d2-4c14-a577-fb90db171b85.jpg?im_w=1200',
            },
        ]
        },
        {
          'id': 11,
          'name': 'Aconchegante e colado na praia do Farol da Barra.',
          'price': 150,
          'host': 'Juan',
          latitude: -13.011228,   
          longitude: -38.504481,
          'localization': 'Salvador',
          'description': 'Apartamento novo, 1 quarto, 1 banheiro, cozinha, lavanderia, mobiliado, FAROL DA BARRA.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/252bdc02-f750-480b-b7ca-9f9f19f2a75a.jpg?im_w=720',
              id: 1,
            },
            {
              url: 'https://a0.muscache.com/im/pictures/1105553/e3eb4763_original.jpg?im_w=1200',
            },
        ]
        },
        {
          'id': 12,
          'name': 'SALVADOR QUARTO FRENTE AO MAR',
          'price': 810,
          'host': 'Juan',
          'rating': 4.68,
          latitude: -24.017955, 
          longitude: -46.277245,  
          'localization': 'Guarujá',
          'description': 'Belíssima cobertura, com 220 metros quadrados, localizada a duas quadras da praia, em ótimo estado, com ampla área externa com piscina, churrasqueira, jardim e espaço gourmet. Completamente equipada e perfeita para passar grandes momentos na companhia de amigos e familiares. Atenção às regras da prefeitura sobre acesso a Cidade, especialmente durante a pandemia de Covid-19. Sobre o tema, siga a orientação para prevenção dadas pelas entidades médicas locais e internacionais para sua segurança.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/8690b59a-a221-4bf0-b0d2-8dcc7e3dbb7e.jpg?im_w=1200',
            id: 1,
            },
            {
            url: 'https://a0.muscache.com/im/pictures/4182e9c3-9318-402f-8535-e79c68b3708a.jpg?im_w=720',
            },
        ]
        },
        {
          'id': 13,
          'name': 'Casa Acantilado',
          'price': 2755,
          'host': 'Juan',
          'localization': 'Espanha',
          'description': 'Esta propriedade de 2 andares é composta por uma sala, uma cozinha totalmente equipada com máquina de lavar louça, 3 quartos e 3 casas de banho (1 com banheira, os outros 2 com duche) e pode, portanto, acomodar 6 pessoas. Comodidades adicionais incluem Wi-Fi, ar condicionado em toda a casa, uma máquina de lavar roupa, uma máquina de secar roupa, bem como TV satélite. Um berço de bebé e uma cadeira de refeição estão disponíveis mediante solicitação. O quarto 1 tem 1 cama queen-size. O quarto 2 tem 1 cama de casal. O quarto 3 tem 2 camas de solteiro.O destaque deste alojamento é a sua área exterior privada com piscina (que pode ser aquecida por 5 euros por noite), jardim, terraço aberto, churrasqueira e duche exterior. Partilhe uma deliciosa refeição no seu terraço enquanto desfruta da fantástica vista para o mar e as montanhas próximas.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=1200',
              id: 1,
            },
            {
              url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=720',
            },
        ]
        },
        {
          'id': 14,
          'name': 'Boa Esperanca Stellan',
          'price': 710,
          'host': 'Juan',
          'localization': 'Paraty',
          'description': 'Casa de campo calma e tranquila com três quartos, cozinha totalmente equipada, sala de estar espaçosa e um enorme terraço com vistas magníficas. Há também uma bela piscina com vistas igualmente deslumbrantes que é compartilhada com a casa vizinha. Esta casa de bom gosto está localizada a 7 km da cidade de Paraty.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/0112a195-6694-4182-92b5-c8d2879a0e30.jpg?im_w=720',
              id: 1,
            },
            {
              url: 'https://a0.muscache.com/im/pictures/5f0a5949-6b03-4f81-a22b-a33c0e3be11b.jpg?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/2e5b29d1-53c4-4a67-aa37-b17710271300.jpg?im_w=720',
            },
        ]
        },
        {
          'id': 15,
          'name': 'Design House na floresta tropical com cascata privada',
          'price': 1003,
          'host': 'Juan',
          'localization': 'paraty',
          'description': 'Casa de design exclusivo inspirada na arquitetura da tribo Ashaninka imersa na floresta tropical com uma cachoeira privada a 300 metros de distância da sua porta. Toda a água para a casa vem de uma fonte natural nesta casa totalmente integrada à natureza. Fácil acesso de carro ou ônibus a 20 minutos do centro de Paraty. A casa fica em propriedade privada de um amigo de longa data compartilhando mais de 200.000 metros quadrados com apenas outras 5 casas com total segurança e privacidade',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/e08d07a2-4eaa-4930-9c22-132072aee408.jpeg?im_w=1200',
              id: 1,
            },
        ]
        },
        {
          'id': 16,
          'name': 'O Cocar: geminada c/ hidro de frente p/ cachoeira',
          'price': 1003,
          'host': 'Juan',
          'localization': 'São Paulo',
          'description': 'Cabana geminada com A Flecha, no Cambuim Cabanas, um refúgio paradisíaco nas montanhas da Serra Catarinense com cachoeiras exclusivas, tornando o local excelente para se visitar também no verão.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/40588b31-71f1-4b0f-a755-ea3005d246c3.jpg?im_w=1200',
              id: 1,
            },
          ]
        },
        {
          'id': 17,
          'name': 'Contemporânea e sustentável no meio da Natureza',
          'price': 717,
          'host': 'Juan',
          'localization': 'Rio de janeiro',
          'description': 'Uma oportunidade única para viver nesta casa e desfrutar de um descanso cercado pela natureza com o melhor acesso as praias e ao centro de Ubatuba. Localizada no condominio Ressaca, com segurança 24 hs. Internet Wi-Fi por fibra óptica.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/612c91c5-106c-42c3-907e-c6d9675d88c5.jpg?im_w=720',
            },
          ]
        },
        {
          'id': 18,
          'name': 'O Esconderijo do Ártico, o Njalla, a casa da torre.',
          'price': 1059,
          'host': 'Juan',
          'localization': 'Noruega',
          'description': 'Nossa torre - a Njalla - é uma versão lúdica emblemática de uma casa de comida e armazenamento Sami. Nossa coluna é de aço e medida para ventos de até 100 m/s. Ventos que nunca tivemos aqui. O Njalla é oferecido apenas algumas vezes como cápsula de dormir. Queremos que a maior parte do ano seja uma casa de leitura compartilhada, mas às vezes você precisa dormir lá. ',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/6e98e30a-cc26-4110-a06f-072e7663f07d.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 19,
          'name': 'Montanha Alvorada',
          'price': 650,
          'host': 'Juan',
          'localization': 'Santa Catarina',
          'description': 'nosso chalé conta com 48 mts quadrados ,bem pensados e distribuídos entre uma cozinha completa ,uma sala de TV.banheiro bem amplo,e um mezanino com hidromassagem para casal,cama de casal 1.38x198.a vista das montanhas ,que temos em nossa pousada ,dispensa comentários,é inclivellllll.sem dúvidas ,uma das melhores ,entre as pousadas.tambem agendamos vôos de balão,trilhas ,cavalgada, quadriciclo, entre outros...',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/5558d351-5cfa-4869-bffa-44905a72f0fd.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 20,
          'name': 'Passeio na floresta',
          'price': 759,
          'host': 'Juan',
          'localization': 'Belo Horizonte',
          'description': 'NATURAVE é uma experiência de estadia única no topo das árvores. Uma cabana única onde, no conforto do seu quarto, você pode desfrutar dos pássaros cantando, visitando as famílias de macacos que passam na montanha bem na frente de você ou apenas desfrutar de uma xícara de café cercado pela paz de Monteverde.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/379f84f9-d418-41ad-b1b3-e1f9d007124d.jpg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/b7fae438-a4e5-4c8e-9bf5-c26c7610f25d.jpeg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/6e8ba355-a167-4662-98b8-3eb543c841f5.jpeg?im_w=720',
            },
          ]
        },
        {
          'id': 21,
          'name': 'Atelier House',
          'price': 8129,
          'host': 'Juan',
          'localization': 'Barbados',
          'description': 'Caribbean sunshine streams in floor-to-ceiling windows to light up this modern take on a beach house in Carlton Ridge. The infinity pool seems to spill into a stand of mahogany trees leading down to the sea, and a wraparound terrace has spots for lounging, sitting, and dining. A double-height great room overlooks gardens with lilies and palms native to Barbados. It’s minutes to west coast beaches.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/monet/Luxury-54345978/original/81e4484e-7ec5-4499-8f13-bc26432c3bd1?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/monet/Luxury-54345978/original/688af106-8470-4a35-b219-4218e11bf9d0?im_w=720',
            },
          ]
        },
        {
          'id': 22,
          'name': 'Cobertura com a melhor vista de Paris',
          'price': 1992,
          'host': 'Juan',
          'localization': 'Paris',
          'description': 'ninguém em frente ao seu terraço extraordinário, mas uma vista única de todo o Paris a partir de seu loft amplamente aberto para o céu cheio Torre Eiffel a 100 m',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/12015095/160e3020_original.jpg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/6883400f-609c-4a5c-b6fd-b70d30a2a1fe.jpg?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/12015176/7d6e605e_original.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 23,
          'name': 'Brand New Apartamento perto da praia',
          'price': 332,
          'host': 'Juan',
          'localization': 'Espanha',
          'description': 'Excelente apartamento todo remodelado e novo em uma residência muito tranquila e tranquila perto do mar, lojas, estação ferroviária e aeroporto.   A uma curta distância de tudo o que você precisa.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/2b73c82c-871a-4eb7-bfcf-0138a50822f6.jpg?im_w=1200',
            },
          ]
        }
  ])
}