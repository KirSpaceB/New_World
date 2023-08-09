import Image from 'next/image';
import handWithBubbles from '../../../../public/hand_with_bubbles.jpeg';
import {textForPage} from './text'
import { dm_Serif_Display_italic } from '@/app/Fonts/DM_Serif_Display';
export default function page() {
  return (
    <div className={dm_Serif_Display_italic.className}>
      <div className="flex">
        <div className="flex-1">
          <div className='flex flex-col min-h-screen items-start justify-center sm:items-center sm:mt-20'>
            <p className='text-xl sm:text-6xl sm:mr-[20rem]'>
              Product Text
            </p>
            <p id='Product Description' className='text-base sm:w-[500px] sm:h-[446px] sm:text-xl mt-10 '>
              {textForPage.Product_Description}
            </p>
          </div>
        </div>
        <div 
          className="flex-1 min-h-screen relative"
          >
          <Image 
            src={handWithBubbles} 
            layout="fill"
            objectFit="cover"
            alt="Hand with bubbles"
          />
        </div>
      </div>
    </div>
  )
}
