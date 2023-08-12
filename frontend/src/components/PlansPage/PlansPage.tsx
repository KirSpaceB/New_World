import React from 'react'
import Card from '../Card/Card'
import { cardText } from '../Card/text'


export default function PlansPage() {
  return (
    <div className=''>
      <nav className=''>
        <h1 className='text-white ml-10 text-6xl pt-10'>
          NW
        </h1>
      </nav>

      <div className='flex justify-center items-center mt-10'>
        <h1 className='text-white text-6xl'>
          Plans
        </h1>
      </div>

      <div 
        className="flex flex-row space-x-12 justify-center items-center mt-[100px]" id="plans_cards"
      >
        <Card
          cardColor='#D47AEB'
          price='599'
          cardText={cardText.card1}
        />

        <Card
          cardColor='#1F8EF2'
          price='1999'
          cardText={cardText.card2}
        />
        <Card
          cardColor='#D9B2AB'
          price='5999'
          cardText={cardText.card3}
        />
      </div>
    </div>
  )
}
