import { dm_Serif_Display_italic } from "@/app/Fonts/DM_Serif_Display"

export default function HeadingTexts() {
  return (
    <div className={dm_Serif_Display_italic.className}>

      <div className="sm:mt-[150px] sm:ml-[250px]">
        <h1 className="text-white sm:text-6xl">
          NEW WORLD
        </h1>
        <p className="text-white sm:text-xl sm:max-w-[270px] sm:mt-[10px] ml-[10px]">
          Tackles the problem everyone has been been talking about
        </p>
      </div>

      <div className="sm:mt-[200px] sm:mr-[200px] flex flex-col items-end">
        <h1 className="text-white sm:text-6xl">
          Impossible Meets Possible
        </h1>
        <p className="text-white sm:w-[500px] sm:h-[100px] sm:mr-[130px] sm:mt-[10px] sm:text-xl">
          A groundbreaking neural-link technology that enables direct communication between the human mind and artificial intelligence.
        </p>
      </div>

    </div>
  )
}
