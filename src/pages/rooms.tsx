import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { PropertiesType } from '../types/Categories.type';
import { InferGetStaticPropsType } from 'next';
import Header from '../components/Header';
import { StarIcon } from '@heroicons/react/solid';
import airCover from '../assets/cover.png'

export default function Rooms({searchResults}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const { name, id } = router.query;
    
  return (
    <div>
        <Header />
        {searchResults.map((result: PropertiesType) => (
        <>
        <Head>
            <title>{name}</title>

            <meta name='description' content={result.name} />
            <meta property='og:title' content={result.name} />
            <meta property='og:description' content={result.description} />
            <meta property='og:type' content='website' />
            <meta property="og:image" content={result.images[0].url} />
        </Head>
                <div className=''>
                        {result.id.toString() === id ? (
                            <div className="places grid grid-cols-1 w-321px h-400px
                            md:grid-cols-3 lg:grid-cols-4">
                                    <div className="cursor-pointer">
                                        <Image src={result.images[0].url} width={500} height={305} />
                                        <div className="counter absolute right-5 top-350 bg-zinc-600 opacity-50 rounded-md sm:hidden">
                                        <p className='text-white pl-3 pr-3 opacity-100'>1 / {result.images.length}</p>
                                        </div>
                                    </div>
                                    <main className='p-5'>
                                        <div className="title border-b-2 border-black-800">
                                        <h1 className='text-2xl font-medium'>
                                            {result.name}
                                        </h1>
                                        <div className="rating flex items-center">
                                        {result.rating ? 
                                        <>
                                        <StarIcon className='h-4 text-black pl-1 pr-1' />
                                        <p>{result?.rating}</p>
                                        </>
                                            : <>
                                                <p className=''>Nenhuma avaliação</p>
                                            </>}
                                        </div>

                                        <p className='underline pb-5'>{result.localization}</p>
                                        </div>
                                        {/* <div className="host pb-5 border-b-2 border-black-800">
                                        <h5>
                                        Hospedado por
                                        {result.host}
                                        </h5>
                                        </div> */}
                                        <div className="host pt-5 pb-5 border-b-2 border-black-800">
                                            <Image src={airCover} width={123} height={26} ></Image>
                                            <p>Todas as reservas incluem proteção gratuita contra cancelamentos feitos pelo anfitrião, informações incorretas no anúncio, problemas no check-in, dentre outros.</p>
                                            <h5 className='underline'>Saiba mais</h5>
                                        </div>
                                        
                                        <p  className='pb-5 pt-5'>{result.description}</p>
                                    </main>
                                        <div className="flex bg-white sticky bottom-0 items-center justify-between border-t-2 border-black-800">
                                        <div className="price flex items-center">
                                        <h5 className='pl-5 '>
                                        {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        }).format(result.price)} 
                                            </h5> / noite
                                        </div>
                                        <button className='p-5'>
                                        <h5 className='w-full p-5 flex items-center justify-center py-3 border 
                                        border-transparent text-base font-xl rounded-md text-white bg-red-600 hover:bg-red-500 md:py-4 md:text-lg md:px-10 active:scale-90 transition duration-150'> 
                                        Reservar 
                                        </h5>
                                        </button>

                                        </div>
                            </div>
                        )
                            : ''}
                    </div>
        </>
       )
       )}
    </div>
  )
}

export const getStaticProps = async () => {
    let host = process.env.API
    const res = await fetch(host + '/api/Properties')
    const searchResults: PropertiesType[] = await res.json()
  
    return {
        props: {
            searchResults,
        },
    };
  }
  
  