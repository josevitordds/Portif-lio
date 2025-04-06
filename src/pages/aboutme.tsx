'use client';
import { useState } from "react";
import { CardIcon } from "@/components/cardicon";
import Image from "next/image";
import { Button } from "@/components/button";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleText = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <div className="bg-[url(/Bg1.png)] relative bg-no-repeat bg-cover bg-center max-w-[1600px] mx-auto min-h-screen px-5 py-8 flex items-center">
      <div className="w-full max-w-sm ml-auto flex flex-col items-start gap-1 sm:max-w-2xl">
        <h1 className="font-semibold text-white-600 not-only:font-kl text-3xl sm:text-4xl flex items-center">
          Sobre <span className="text-yellow ml-2">mim</span>
        </h1>
        <section className="h-0.5 w-40 bg-white-600 -rotate-2 mb-3"></section>
        <span className="font-cabin font-light mb-2 text-white-600 text-base sm:text-lg">
          Sempre gostei da área da tecnologia, principalmente da área de desenvolvimento e programação. Sempre pratiquei a programação. Durante o ensino médio fiz um projeto de robótica, programando com a linguagem C++.
        </span>
        {showMore && (
          <span className="font-cabin font-light mb-2 text-white-600 text-base sm:text-lg transition-opacity duration-300">
            Posteriormente, aprofundei meus conhecimentos com projetos pessoais e cursos online, explorando linguagens como JavaScript, TypeScript e frameworks como React e Next.js. Amo resolver problemas com código e criar experiências interativas para web.
          </span>
        )}
        <Button onClick={handleToggleText}> {showMore ? "Ler menos" : "Ler mais"}</Button>
      </div>
    </div>
  );
}
