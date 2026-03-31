import type { Metadata } from "next";
import { Yusei_Magic } from "next/font/google";
import imgBackground from "@/public/image/background/bg-home.png"
import "./globals.css";

const yuseiMagic = Yusei_Magic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yusei",
});
export const metadata: Metadata = {
  title: "Minigame | 21 do Husk",
  description: "Será que você consegue chegar a 21 pontos sem estourar e vencer o Husk? Jogue e descubra!",


  openGraph: {
    title: 'Minigame | 21 do Husk',
    description: 'Será que você consegue chegar a 21 pontos sem estourar e vencer o Husk? Jogue e descubra!',
    url: 'https://21-do-husk.netlify.app/',
    siteName: 'Minigame | 21 do Husk',
    images: [
      {
        url: imgBackground.src,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Minigame | 21 do Husk',
    description: 'Será que você consegue chegar a 21 pontos sem estourar e vencer o Husk? Jogue e descubra!',
    images: [imgBackground.src],
  },
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
