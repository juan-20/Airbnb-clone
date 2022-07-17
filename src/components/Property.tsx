import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import { PropertiesType } from '../types/Categories.type';
import Image from 'next/image'
export default function Property({PropertiesProps}: any ) {
    console.log(PropertiesProps)

  return (
    
        <div className='grid' key={PropertiesProps.id}>
                <Image className='rounded-md' src={PropertiesProps.images[0].url} width={321} height={305} ></Image>
                <h5 className='font-semibold'>{PropertiesProps.name}</h5>
                <p>{PropertiesProps.localization}</p>  
                <div className="flex justify-between text-center items-center">
                <p>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(PropertiesProps.price)}
                / noite</p>
                <div className="rating flex items-center">
                {PropertiesProps.rating ? <p>{PropertiesProps?.rating}</p>    : 'Novo'}
                <StarIcon className='h-4 text-black' />
                </div>
                </div>
        </div>

  )
}
