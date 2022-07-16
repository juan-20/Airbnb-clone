import React from 'react'
import { useState } from 'react'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Categories, PropertiesType } from '../types/Categories.type'
import {
  ChevronRightIcon,
  AdjustmentsIcon,
  StarIcon
} from '@heroicons/react/solid'
import Carrousel from '../components/Carrousel'
import CarrouselImage from '../components/Carrousel'
import Footer from '../components/Footer'



function Home({exploreData}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [property, setProperty] = useState<PropertiesType[] | undefined>();


  async function handleChangeCategories(properties: PropertiesType[] | undefined) {

    console.log(properties, + " eita")
    if (properties === undefined) console.error('Nada para carregar') 
    setProperty(properties)  

  }
  return (
    <div>
      <Head>
        <title>Airbnb - Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <div id="select" className='flex gap-10'>
        <div className='flex flex-row gap-10 p-5 overflow-x-auto w-5/6 whitespace-nowrap scrollbar-hide
          // Media querry:
          md:px-10'>
        {exploreData.map((card) => (
            <button
             onClick={() => {
              handleChangeCategories(card.properties)
             }}
             key={card.title} className='hover:border-b-4 border-indigo-100'>
            <Image src={card.image} width='24px' height='24px' objectFit='contain' objectPosition='left' />
            <p>{card.title}</p>
            </button>
        ))}
        </div>
        <div className=" bg-white flex justify-center items-center gap-4">
            <div className=" flex items-center justify-center border-2 rounded-full cursor-pointer w-7 h-7">
               <ChevronRightIcon className='h-4'/>
            </div>
            <div className=" flex items-center space-x-2 border-2 p-2 rounded-lg cursor-pointer w-22 h-12">
              <AdjustmentsIcon className='h-4' />
              <p className='text-sm'>Filtros</p>
            </div>
          </div>
          </div>


          <div className="places">
            {property === undefined ? 'Sem nada pra Alugar irmão' : 'Carregou ehehhe'}
            {property?.map((properties) => (
              <div key={properties.id}>
              {/* {properties?.images.map((src, id) => (
                 
                <Image src={src.url} key={id} width={200} height={100} ></Image>
                
                ))}  */}
                <Image src={properties.images[0].url} width={200} height={100} ></Image>
              <h1>{properties.name}</h1>
              <p>{properties.localization}</p>
              <p>R${properties.price} / noite </p>
              <div className="rating">
                <p>Estrelas: {properties.rating}
                <StarIcon className='h-4 text-black' />
                </p>
              </div>
              </div>
            ))}

        
          </div>

          <section>
            <Footer />
          </section>
      </main>


    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  let host = process.env.API
  const res = await fetch(host + '/api/Categories')
  const exploreData: Categories[] = await res.json()

  return{
    props:{
      exploreData
    }
  }
  
}
