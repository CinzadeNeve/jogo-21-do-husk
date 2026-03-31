import type { Metadata } from "next";
import { Yusei_Magic } from "next/font/google";
import "./globals.css";

const yuseiMagic = Yusei_Magic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yusei",
});
export const metadata: Metadata = {
  title: "21 do Husk",
  description: "Será que você consegue chegar a 21 pontos sem estourar e vencer o Husk? Jogue e descubra!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${yuseiMagic.variable} h-full antialiased`}
    >
      <body className="flex flex-col h-screen max-md:h-dvh w-full items-center justify-center relative px-[1rem]">
        {children}
       </body>
    </html>
  );
}
