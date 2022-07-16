import React from 'react'
import Image from 'next/image'



export default function Carrousel() {
  return (
    <div className='overflow-hidden' id="slider">
      <figure className='relative m-0 l-0'>
        <Image width={200} height={100}  src='https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/5b50ac57-8eca-4b8b-be51-43a7155ed37a.jpeg?im_w=720' />
        <Image width={200} height={100}  src='https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/f1f4f807-b77f-4223-98f0-3afaa11520f6.jpeg?im_w=720' />
        <Image width={200} height={100}  src='https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/2d3bdedf-6ffc-4c17-9a3a-a6cb02e2974f.jpeg?im_w=1200' />
      </figure>
    </div>
  )
}
