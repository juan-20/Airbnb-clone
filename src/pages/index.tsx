import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Categories } from '../types/Categories.type'

import {
  ChevronRightIcon,
  AdjustmentsIcon
} from '@heroicons/react/solid'

function Home({exploreData}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(exploreData)
  return (
    <div>
      <Head>
        <title>Airbnb - Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <div id="select" className='flex gap-10'>
        <div className='flex flex-row gap-10 p-5 overflow-x-auto w-5/6 whitespace-nowrap
          // Media querry:
          md:px-10'>
        {exploreData.map((card) => (
            <button key={card.title} className='hover:border-b-4 border-indigo-100'>
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
