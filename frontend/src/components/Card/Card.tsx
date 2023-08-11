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
      className=" bg-white p-4 sm:ml-0 h-[60vh] w-[20vw] rounded-xl"
      style={{
        backgroundColor: cardColor // Make dynamic
      }}
    >
      <div className='flex flex-col'>
        <div className={dm_Serif_Display_normal.className}>
          <div className='flex flex-row justify-center items-center'>
            <span className='text-6xl'>
              $
            </span>
            <h1 className='text-5xl pt-4' id='card_price'>
              {price}
            </h1>
          </div>
        </div>

        <div className={dm_Serif_Display_italic.className}>
          <div className='flex justify-center items-center'>
            <h1 className='text-4xl'>
              One time payment
            </h1>
          </div>

        </div>
        
        <div className={dm_Mono_normal.className}>
          <p className='flex justify-start items-start ml-12 mt-6'>
            {cardText}
          </p>
        </div>

        <div className='flex items-center justify-center cursor-pointer mt-10'>
          <div className={dm_Mono_normal.className}>
            <div className='bg-black flex items-center justify-center w-[264px] h-[61px]'>
              <h3 className='text-2xl text-white'>
                Buy Now
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
