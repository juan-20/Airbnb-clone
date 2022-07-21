import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { PropertiesType } from '../types/Categories.type';
import { InferGetStaticPropsType } from 'next';
import Header from '../components/Header';
import { StarIcon } from '@heroicons/react/solid';
import airCover from '../assets/cover.png'
import {ListImage} from '../../styles/styles'
import Footer from '../components/Footer';

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
                            <div className="places flex flex-col w-321px h-400px md:p-5 flex justify-center">
                                    {/* images no mobile */}
                                    <div className="cursor-pointer md:p-5 flex justify-center md:hidden">
                                        <Image className='' src={result.images[0].url} width={500} height={305} />
                                        <div className="counter absolute right-5 top-350 bg-zinc-600 opacity-50 rounded-md sm:hidden">
                                        <p className='text-white pl-3 pr-3 opacity-100'>1 / {result.images.length}</p>
                                        </div>
                                    </div>
                                    {/* images no web */}
                                    <div className="cursor-pointer flex-col w-full md:p-5 justify-center hidden md:flex gap-2 items-center">
                                          <div className="flex flex-col w-3/4 justify-left">
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
                                        <ListImage id='room-image' className="flex ">
                                        {result.images.map(e => (
                                             <img className={' image'+ e.id?.toString()}  src={e.url} />
                                             ))}
                                        </ListImage>
                                    </div>


                                    <main className='p-5 md:grid grid-cols-3 gap-20'>
                                        <div className="title border-b-2 border-black-800 md:hidden ">
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
                                        <div className="content col-span-2">
                                        <div className="host pt-5 pb-5 border-b-2 border-black-800">
                                            <Image src={airCover} width={123} height={26} ></Image>
                                            <p>Todas as reservas incluem proteção gratuita contra cancelamentos feitos pelo anfitrião, informações incorretas no anúncio, problemas no check-in, dentre outros.</p>
                                            <h5 className='underline'>Saiba mais</h5>
                                        </div>
                                        <div className="">
                                        <p  className='pb-5 pt-5'>{result.description}</p>
                                        </div>
                                        </div>
                                        {/* Comprar no PC */}
                                                <div className="buy h-350 sticky top-40 hidden md:flex flex-col drop-shadow-lg flex justify-between  border-2 border-black-800 rounded-md ">
                                                    <div className="head w-full flex justify-between items-center p-4">
                                                        <h5>{new Intl.NumberFormat('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                        }).format(result.price)} 
                                                        / noite
                                                        </h5>
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
                                                       </div>

                                                        <div className="p-5 flex flex-col justify-center items-center">
                                                        <button className='w-full'>
                                                        <h5 className='w-full flex items-center justify-center py-3 border 
                                                        border-transparent text-base font-xl rounded-md text-white bg-gradient-to-r from-red-500 to-red-600 alo hover:bg-red-500 md:py-4 md:text-lg md:px-10 active:scale-90 transition duration-150'> 
                                                        Reservar 
                                                        </h5>
                                                        </button>
                                                        <p className='pt-5'>Você ainda não será cobrado</p>
                                                        </div>

                                                        <div className="checkout p-5 flex flex-col gap-3">
                                                            <div className="5 flex justify-between">
                                                          <p className='underline'>  {result.price} X 5 noites </p>
                                                          <p>{result.price * 5}</p>
                                                          </div>
                                                                <div className="clean flex justify-between">
                                                            <p>Taxa de limpeza</p>                                                            
                                                            <p>R$136 </p>
                                                            </div>
                                                                <div className="service flex justify-between pb-3 border-b-2 border-black-800">
                                                            <p>Taxa de serviço </p>
                                                            <p>R$0 </p>
                                                            </div>
                                                            <div className="taxes flex justify-between">
                                                            <h1>Total antes dos impostos</h1>
                                                            <h1>R$7.605</h1>
                                                            </div>
                                                        </div>
                                                </div>
                                    </main>
                                        {/* preço no mobile */}
                                        <div className="flex h-300 drop-shadow-lg bg-white sticky bottom-0 items-center justify-between border-t-2 border-black-800
                                        md:hidden">
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
       <Footer/>
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
  
  