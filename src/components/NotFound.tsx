import React from 'react'
import Banner from '../assets/banner-airbnb.png'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]
        xl:h-[600px] 2xl:h-[700px] font-sans">
            <Image src={Banner}
            layout="fill"
            objectFit="cover"
            />

            <div className="absolute top-1/2 w-full text-center" >
                <p className="bannerText" > Sem lugares para alugar, Escolha outra Categoria. </p>
            </div>
        </div>
  )
}
