import React from 'react'
import Image from 'next/image'
import Hero from '../assets/Airbnb_Logo.jpg'
import {
    SearchIcon,
    UserCircleIcon,
    GlobeAltIcon,
    MenuIcon,
} from '@heroicons/react/solid'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 
    // Media querry:
    md:px-10
    '>

        <div className="hero relative flex items-center h-10 cursor-pointer my-auto">
            <Image layout='fill' objectFit='contain' objectPosition='left' src={Hero} />
        </div>

        <div className="search flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600' type="text" placeholder='Procure seu lugar' />
            <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer
            md:inline-flex md:mx-2'/>
        </div>

        <div className="config flex items-center space-x-4 justify-end text-gray-500">
            <p className='hidden md:inline cursor-pointer'>
                Seja um anfitrião
            </p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className="user flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                <MenuIcon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>


    </header>
  )
}
