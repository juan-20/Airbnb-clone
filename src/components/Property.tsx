import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function Property({PropertiesProps}: any ) {
    const router = useRouter();
    console.log(PropertiesProps)

      return (
        <div
        onClick={() => {
          router.push({
         pathname: '/rooms',
         query: {
           name: PropertiesProps.name,
           id: PropertiesProps.id,
         }
        })}
        }
          className='grid cursor-pointer'   key={PropertiesProps.id}>
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
