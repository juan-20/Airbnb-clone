import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className="atendimento space-y-4 text-xs text-gray-800">
            <h5 className='font-extrabold '>Atendimento</h5>
            <p className='cursor-pointer'>Central de Ajuda</p>
            <p className='cursor-pointer'>Air Cover</p>
            <p className='cursor-pointer'>Informações de Segurança</p>
            <p className='cursor-pointer'>Apoie pessoas com deficiência</p>
            <p className='cursor-pointer'>Opções de cancelamento</p>
            <p className='cursor-pointer'>Nossa resposta à pandemia de COVID-19</p>
            <p className='cursor-pointer'>Denuncie um problema do bairro</p>
        </div>

        <div className="comunidade space-y-4 text-xs text-gray-800">
            <h5 className='font-extrabold '>Comunidade</h5>
            <p className='cursor-pointer'>Aibnb.org: ajuda em desastres</p>
            <p className='cursor-pointer'>Apoie refugiados afegãos</p>
            <p className='cursor-pointer'>Combate à discriminação</p>

        </div>

        <div className="hospedagem space-y-4 text-xs text-gray-800">
            <h5 className='font-extrabold '>Hospedagem</h5>
            <p className="cursor-pointer">Experimente hospedar</p>
            <p className="cursor-pointer">AirCover para anfitriões</p>
            <p className="cursor-pointer">Explore recursos para hospedar</p>
            <p className="cursor-pointer">Visite o fórum da comunidade</p>
            <p className="cursor-pointer">Hospede de forma responsável</p>

        </div>

        <div className="airbnb space-y-4 text-xs text-gray-800">
            <h5 className='font-bold'>Airbnb</h5>
            <p className="cursor-pointer">Newsroom</p>
            <p className="cursor-pointer">Descubra os novos recursos</p>
            <p className="cursor-pointer">Carta dos nossos fundadores</p>
            <p className="cursor-pointer">Carreiras</p>
            <p className="cursor-pointer">Investidores</p>
        </div>
    </div>
  )
}
