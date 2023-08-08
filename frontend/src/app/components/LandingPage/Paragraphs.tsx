import { dm_Serif_Display_italic } from "@/app/Fonts/DM_Serif_Display"

export default function Paragraphs() {
  return (
    <div id="paragraphs_sub_container" className={dm_Serif_Display_italic.className}>
      <p className="text-white text-sm inline-block max-w-screen">
        Tackles the problem everyone has been been talking about
      </p>

      <p className="text-white text-[12px] inline-block max-h-screen">
        A groundbreaking neural-link technology that enables direct communication between the human mind and artificial intelligence.
      </p>
    </div>
  )
}
