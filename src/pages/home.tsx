'use client';
import { useRef } from "react";
import { CardIcon, LinkIcon } from "@/components/cardicon"
import Image from "next/image";
import { Button } from "@/components/button"
import imgGIT from "@/assets/1dc1681f-48c9-4036-af65-1c2331a4344b.png"
import imgLIN from "@/assets/b1b92b2c-734d-42a0-be3f-97b92f72b2a4.png"
import imgMES from "@/assets/58394ff3-3f88-46b2-8468-cb4245feb295.png"

import AboutMe from "@/pages/aboutme";
import Skills from "@/pages/skills";
import Projetos from "@/pages/projetos";
export default function Home1() {
  const sobreRef = useRef<HTMLDivElement>(null);
  const habilidadeRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <div className="max-w-[1600px] mx-auto px-5 py-8 md:py-0 bg-[url(/background.png)] bg-no-repeat bg-cover bg-center md:bg-right-top">
      <div className="h-dvh flex flex-col justify-between gap-16 relative">
        <div className="flex h-full items-start justify-between py-7 max-w-[1400px] mx-auto w-full ">
          <h1 className="font-just text-yellow text-5xl px-30">Jv Dev</h1>
          <span className="flex justify-around items-center space-x-10">
            <span   onClick={() => scrollToSection(sobreRef)} className="font-cabin bg-white-600 rounded-2xl w-25 flex items-center justify-center shadow-custom-fd cursor-pointer transition-transform duration-300 hover:scale-102">Sobre Mim</span>
            <span onClick={() => scrollToSection(habilidadeRef)} className="font-cabin cursor-pointer transition-transform duration-300 hover:scale-102">Habilidades</span>
            <span onClick={() => scrollToSection(projetosRef)} className="font-cabin cursor-pointer transition-transform duration-300 hover:scale-102">Projetos</span>
            <span className="font-cabin">Experiência</span>
            <span className="font-cabin">Contato</span>
          </span>
        </div>
        <div className="flex h-full items-end  mx-auto w-full pl-40">
          <h1 className="flex flex-col font-bk text-4xl text-yellow font-semibold">
            <span className="font-bk text-2xl text-white-600 font-medium">Olá, sou o José Vitor.</span>
            Desenvolvedor Front-End
            <span className="font-bk text-lg text-white-600 font-light">Atualmente graduando em Ciência da Computação, com estudo dedicado ao front-end</span>
          </h1>
        </div>
        <div className="flex w-full h-full justify-start items-start mb-20 gap-10 pl-50 sm:gap-30">

          <LinkIcon href="https://github.com/josevitordds" imgSrc={imgGIT} alt="GitHub" />
          <LinkIcon href="https://www.linkedin.com/in/josévitordiasdossantos/" imgSrc={imgLIN} alt="GitHub" />
          <LinkIcon href="https://github.com/josevitordds" imgSrc={imgMES} alt="GitHub" />
        </div>
      </div>
      
    </div>
    <div ref={sobreRef}><AboutMe /></div>
    <div ref={habilidadeRef}><Skills /></div>
    <div ref={projetosRef}><Projetos /></div>
    </>
  );
}
