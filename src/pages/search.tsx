import { useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header'

export default function Search() {
  const router = useRouter();

    // console.log(searchResults);

    const { location, startDate, endDate, guests } = router.query;
  return (
    <div>
      <Header/>
      Boa viagem : ).   .
      {location}
      {startDate}
      {endDate}
      {guests}
    </div>
  )
}
