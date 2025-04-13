"use client";
import { Lapis } from "@/components/lapis";
import { motion } from "framer-motion";
export default function Exper() {
    return (
        <div className="bg-[url(/Bg6.png)] bg-no-repeat bg-cover bg-center h-dvh w-full flex flex-col space-y-10">
             <div className="w-full max-w-[1280px] flex justify-start flex-col mt-10 ml-40">
                <h1 className="font-semibold text-white-600 not-only:font-kl text-3xl sm:text-4xl flex items-center">
                    Experiência
                </h1>
                <section className="h-0.5 w-44 bg-yellow -rotate-2 mb-3"></section>
            </div>
            <div className="w-full h-dvh max-w-[1280px] flex justify-start items-start ml-40">
            <Lapis>2020-2021</Lapis>
             <h1 className="flex flex-col ml-2 text-2xl text-white-600">
                Desenvolvedor Front-end
                <span className="text-lg">BRISA</span>
                <span className=" max-w-[800px] text-lg font-cabin text-white-600 text-justify"> Sempre gostei da área da tecnológia, principalmente da área de desenvolvimento e programação, sempre pratiquei a programação, durante o ensino médio fiz um projeto de robótica, programando com a linguagem c++, depois. Sempre gostei da área da tecnológia, principalmente da área de desenvolvimento e programação, sempre pratiquei a programação, durante o ensino médio fiz um projeto de robótica, programando com a linguagem c++, depois </span>
             </h1>
            </div>
            <div className="w-full max-w-[1080px] h-dvh flex justify-start items-start ml-80">
            <Lapis>2020-2021</Lapis>
            <h1 className="flex flex-col ml-2 text-2xl text-white-600">
                Desenvolvedor Front-end
                <span className="text-lg">BRISA</span>
                <span className=" max-w-[800px] text-lg font-cabin text-white-600 text-justify"> Sempre gostei da área da tecnológia, principalmente da área de desenvolvimento e programação, sempre pratiquei a programação, durante o ensino médio fiz um projeto de robótica, programando com a linguagem c++, depois. Sempre gostei da área da tecnológia, principalmente da área de desenvolvimento e programação, sempre pratiquei a programação, durante o ensino médio fiz um projeto de robótica, programando com a linguagem c++, depois </span>
             </h1>
            </div>
            
        </div>
    );

}