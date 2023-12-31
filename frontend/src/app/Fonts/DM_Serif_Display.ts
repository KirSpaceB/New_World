import { DM_Serif_Display } from "next/font/google";

export const dm_Serif_Display_italic = DM_Serif_Display({
  weight:'400',
  style:['italic'],
  subsets:['latin'] // We need a subsets property or we get a NEXT error
});

export const dm_Serif_Display_normal = DM_Serif_Display({
  weight:'400',
  style:['normal'],
  subsets:['latin']
});