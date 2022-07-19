import React from 'react'
import { useState } from 'react'
import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Categories, PropertiesType } from '../types/Categories.type'
import {
  ChevronRightIcon,
  AdjustmentsIcon,
  ChevronLeftIcon,
} from '@heroicons/react/solid'
import Footer from '../components/Footer'
import Property from '../components/Property'
import NotFound from '../components/NotFound'

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
        <title>Airbnb - clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        {/* Categories Select */}
        <div id="select" className='flex sticky'>
              <div  onClick={() => {
                document.getElementById('categories')!.scrollLeft  -= 500;
               }} id='back' className="z-1000 pl-10 flex justify-center items-center">
              <div className="flex items-center justify-center border-2 rounded-full cursor-pointer w-7 h-7">
                   <ChevronLeftIcon id='slideRight' className='h-4'/>
               </div>
               </div>
        <div id='categories' className='flex flex-row overflow-x-auto w-5/6 whitespace-nowrap scrollbar-hide scroll-smooth 
          // Media querry:
          md:px-10'>


        {exploreData.map((card) => (
          <>
            <button
             onClick={() => {
              handleChangeCategories(card.properties)
             }}
             aria-label={card.title}
             key={card.title} className='focus:border-b-4 border-indigo-100 p-5 '>
            <Image src={card.image} width='24px' height='24px' objectFit='contain' objectPosition='left' />
            <p>{card.title}</p>
            </button>
            </>
        ))}
        </div>
        <div className=" bg-white flex justify-center items-center gap-4">
            <div className=" flex items-center justify-center border-2 rounded-full cursor-pointer w-7 h-7">
               <ChevronRightIcon id='slideRight' onClick={() => {
                document.getElementById('categories')!.scrollLeft  += 500;
               }} className='h-4'/>
            </div>
            <div className=" flex items-center space-x-2 border-2 p-2 rounded-lg cursor-pointer w-22 h-12">
              <AdjustmentsIcon className='h-4' />
              <p className='text-sm'>Filtros</p>
            </div>
          </div>
          </div>


        {/* Properties  */}
            {property === undefined ? (
              <NotFound />
            ) : (
            <div className="places grid grid-cols-1 p-5 w-321px h-400px gap-10
            md:grid-cols-3 lg:grid-cols-4">
            {property?.map((properties) => (
            <Property PropertiesProps={properties}  />
            ))}
            </div>
          )}

          <footer>
          <Footer />
          </footer>

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
