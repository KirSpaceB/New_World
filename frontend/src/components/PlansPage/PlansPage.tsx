import React from 'react'
import Card from '../Card/Card'
import { cardText } from '../Card/text'


export default function PlansPage() {
  return (
    <div className=''>
      <nav>
        <ul className='flex flex-row space-x-11'>
          <li className='text-white text-6xl'>NW</li>


          <li className='text-xl text-white'>Product</li>
        </ul>
      </nav>

      <div className='text-white 6xl'>
        Plans
      </div>

      <div className="flex flex-row space-x-12 justify-center items-center mt-[100px]" id="plans_cards">
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
          price='599'
          cardText={cardText.card3}
        />
      </div>
    </div>
  )
}
