import type { Metadata } from "next";
import './globals.css'

import { Just_Another_Hand, Blinker, Cabin_Condensed, Kalam, Kantumruy_Pro } from 'next/font/google'

export const metadata: Metadata = {
  title: "portifolio",
};

const just_another_hand = Just_Another_Hand({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-just_another_hand',
})
const blinker = Blinker({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-blinker',
})
const cabin_condensed = Cabin_Condensed({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-cabin_condensed',
})
const kalam = Kalam({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kalam',
})
const kantumruy_pro = Kantumruy_Pro({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-kantumruy_pro',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${just_another_hand.variable} ${blinker.variable} ${cabin_condensed.variable} ${kalam.variable} ${kantumruy_pro.variable}`}>
      <body className="min-h-screen bg-white ">
        {children}
      </body>

    </html>
  );
}
