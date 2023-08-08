import { DM_Serif_Display } from "next/font/google";

const dm_Serif_Display = DM_Serif_Display({
  weight:'400',
  style:['italic'],
  subsets:['latin']
});

export default function HeadingTexts() {
  return (
    <div className={dm_Serif_Display.className}>
      <p className="absolute top-[48vh] left-[20vw] transform -translate-x-3/5 -translate-y-3/5 text-white md:text-4xl lg:text-6xl lg:left-[20vw] lg:top-[48vh] xl:left-[28vw]">
        NEW WORLD
      </p>
      <p className="absolute top-[52vh] left-[23vw] transform translate-x-1/2 translate-y-1/2 text-white md:text-4xl lg:text-6xl lg:left-[26vw] lg:top-[58vh] xl:left-[32vw] xl:top-[59vh] ">
        Impossible Meets Possible
      </p>
    </div>
  )
}
