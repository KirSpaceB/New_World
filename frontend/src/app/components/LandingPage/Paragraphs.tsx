import { DM_Serif_Display } from "next/font/google";

const dm_Serif_Display = DM_Serif_Display({
  weight:'400',
  style:['italic'],
  subsets:['latin']
});

export default function Paragraphs() {
  return (
    <div id="paragraphs_sub_container" className={dm_Serif_Display.className}>
      <p className="text-white text-sm inline-block max-w-screen">
        Tackles the problem everyones been talking about
      </p>

      <p className="text-white text-[12px] inline-block max-h-screen">
        A groundbreaking neural-link technology that enables direct communication between the human mind and artificial intelligence.
      </p>
    </div>
  )
}
