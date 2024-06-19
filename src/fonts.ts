import { Inter, Libre_Baskerville } from "next/font/google";

const sansFont = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serifFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export { sansFont, serifFont };
