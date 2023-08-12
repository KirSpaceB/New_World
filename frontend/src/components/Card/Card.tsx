import React from 'react'
import { dm_Serif_Display_italic } from '@/app/Fonts/DM_Serif_Display'
import { dm_Serif_Display_normal } from '@/app/Fonts/DM_Serif_Display'
import { dm_Mono_normal } from '@/app/Fonts/DM_Mono'
import {cardText} from './text'
interface ICardProps {
  cardColor: string;
  price:string;
  cardText:string
}
export default function Card(props:ICardProps) {
  const {
    cardColor,
    price,
    cardText
  } = props
  return (
    <div 
      className="bg-white p-4 h-[60vh] w-full sm:w-[27vw] 2xl:w-[20vw] rounded-xl"
      style={{
        backgroundColor: cardColor // Make dynamic
      }}
    >
      <div className='flex flex-col'>
        <div className={dm_Serif_Display_normal.className}>
          <div className='flex flex-row justify-center items-center'>
            <span className='text-2xl sm:text-4xl 2xl:text-6xl'>
              $
            </span>
            <h1 className='text-3xl sm:text-4xl 2xl:text-5xl pt-4' id='card_price'>
              {price}
            </h1>
          </div>
        </div>

        <div className={dm_Serif_Display_italic.className}>
          <div className='flex justify-center items-center'>
            <h1 className='text-xl sm:text-2xl 2xl:text-4xl'>
              One time payment
            </h1>
          </div>
        </div>
        
        <div className={dm_Mono_normal.className}>
          <p 
            className='flex justify-start text-base items-start ml-4 sm:ml-10 2xl:ml-12 mt-6 h-[120px] sm:h-[240px] 2xl:h-[250px] overflow-y-hidden'>
            {cardText}
          </p>
        </div>

        <div className='flex items-center justify-center cursor-pointer mt-10'>
          <div className={dm_Mono_normal.className}>
            <div className='bg-black flex items-center justify-center w-full sm:w-[264px] h-[61px]'>
              <h3 className='text-xl sm:text-2xl text-white'>
                Buy Now
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
