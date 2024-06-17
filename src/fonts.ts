import { Inter, Source_Serif_4 } from "next/font/google";

const sansFont = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serifFont = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export { sansFont, serifFont };
