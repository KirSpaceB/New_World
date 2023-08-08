
import { DM_Serif_Display } from "next/font/google"

const dm_Serif_Display = DM_Serif_Display({
  weight:'400',
  style:['normal', 'italic'],
  subsets:['latin']
})
export default function MyComponent() {
  return (
    <div className={dm_Serif_Display.className}>
      Test2
      <div className="bg-red-500">Test3</div>
      <div className="bg-blue-500">Test4</div>
    </div>
  )
}