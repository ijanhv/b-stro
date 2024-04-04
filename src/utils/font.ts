/* eslint-disable new-cap */
import { Cormorant_Upright, Open_Sans } from "next/font/google";

export const cormorant = Cormorant_Upright({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "600", "700"],
});
