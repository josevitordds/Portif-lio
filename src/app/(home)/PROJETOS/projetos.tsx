"use client";
import { motion } from "framer-motion";
import SwiperProjet from "./swiperprojet";
export default function Projetos() {
    return (
        <div className="bg-[url(/Bg5.png)] bg-no-repeat bg-cover bg-center h-dvh w-full flex justify-center flex-col">
            <div className="w-full max-w-[1280px] flex justify-start flex-col ml-60 pt-20 ">
                <h1 className="font-semibold text-yellow not-only:font-kl text-3xl sm:text-4xl flex items-center">
                    Projetos
                </h1>
                <section className="h-0.5 w-34 bg-white-600 -rotate-2 mb-3"></section>
            </div>
            <div className="ml-60 mt-10 max-w-[1000px] h-130 bg-grayl border-b-yellow border-2 border-t-yellow rounded-xl">
             <SwiperProjet></SwiperProjet>
            </div>
        </div>
    );

}