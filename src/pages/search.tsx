import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { PropertiesType } from '../types/Categories.type';
import Property from '../components/Property';

export default function Search({searchResults}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

    console.log(searchResults);
    const [resultCount, setResultCount] = useState(0);

    const { location, startDate, endDate, guests } = router.query;
  return (
    <div>
      <Head>
        <title>{location}</title>
      </Head>
      <Header/>

      <main className="places p-5 w-321px h-400px gap-10" >
      <p className='p-5 font-semibold'>
        {resultCount} Resultados
      </p>

        <div className="places grid grid-cols-4 gap-10"  onLoad={() => {
          {setResultCount(resultCount + 1)}
        }}>
      {searchResults.map((result: PropertiesType) => (
        <>
        {result.localization === location ? (
           <Property PropertiesProps={result} />
           ) 
           : ''}
        </>
       )
       )}
       </div>
      </main>

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

