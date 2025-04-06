import { CardSkillsIcon } from "@/components/cardskill";
import Image from "next/image";
import imgPT from "@/assets/python_5968350.png"

export default function Skills() {
    return (
        <div className="bg-[url(/Bg2.png)] bg-no-repeat bg-cover bg-center h-dvh flex items-center flex-col">
            <div className="w-full max-w-[1280px] flex justify-start flex-col ml-20 mt-15">
                <h1 className="font-semibold text-white-600 not-only:font-kl text-3xl sm:text-4xl flex items-center">
                    Skills
                </h1>
                <section className="h-0.5 w-25 bg-yellow -rotate-2 mb-3"></section>
            </div>
            <div className="w-full flex justify-around items-center max-w-[1280px] mt-10">
                <CardSkillsIcon>  <Image src={imgPT} alt='sdsasd' className="w-full h-full object-contain" /></CardSkillsIcon>
                <CardSkillsIcon></CardSkillsIcon>
                <CardSkillsIcon></CardSkillsIcon>
                <CardSkillsIcon></CardSkillsIcon>
            </div>
            <div className="w-full flex justify-around items-center max-w-[1280px] mt-10">
                <CardSkillsIcon></CardSkillsIcon>
                <CardSkillsIcon></CardSkillsIcon>
                <CardSkillsIcon></CardSkillsIcon>
                <CardSkillsIcon></CardSkillsIcon>
            </div>
        </div>
    );

}