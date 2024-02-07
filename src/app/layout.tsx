import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ weight:['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faizan Ali - Web Developer",
  
  description: "Hey, I am Faizan Ali Baig. I am a passionate computer science student with a strong focus on web development particularly in front-end technologies.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="keywords" content="Faizan,Faizan Ali, Web Developer, Front-end Developer, Developer, Web, Development, Freelance, Faizan Ali baig, ReactJs Developer, NextJs Developer" />
      </head>
      <body className={space.className}>
        {children}
      </body>
    </html>
  );
}
