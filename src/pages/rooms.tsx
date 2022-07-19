import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { PropertiesType } from '../types/Categories.type';
import { InferGetStaticPropsType } from 'next';
import Header from '../components/Header';

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

                </Head><>
                        {result.id.toString() === id ? (
                            <div className="teste">
                                <h1>
                                    {result.name}
                                </h1>
                                <p>{result.rating}</p>
                                <p>{result.localization}</p>

                                {result.images.map(e => (
                                    <Image src={e.url} width={500} height={305} />
                                )
                                )}

                                <p>{result.price}</p>

                                <p>{result.description}</p>
                            </div>
                        )
                            : ''}
                    </></>
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
  
  