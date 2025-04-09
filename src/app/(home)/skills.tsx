import { CardSkillsIcon } from "@/components/cardskill";
import Image from "next/image";
import imgPT from "@/assets/python_5968350.png"
import imgJV from "@/assets/java-script_1199124.png"
import imgHT from "@/assets/html-5_5968267.png"
import imgCS from "@/assets/css-3_5968242.png"
import imgRT from "@/assets/react_1183621.png"

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
                <CardSkillsIcon>
                    <Image src={imgPT} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">Python</span>
                </CardSkillsIcon>
                <CardSkillsIcon>
                    <Image src={imgCS} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">Css</span>
                </CardSkillsIcon>
                <CardSkillsIcon>
                    <Image src={imgHT} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">Html</span>
                </CardSkillsIcon>
                <CardSkillsIcon>
                    <Image src={imgRT} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">React JS</span>
                </CardSkillsIcon>
            </div>
            <div className="w-full flex justify-around items-center max-w-[1280px] mt-10">
                <CardSkillsIcon>
                    <Image src={imgJV} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">JavaScript</span>
                </CardSkillsIcon>
                <CardSkillsIcon>
                    <Image src={imgPT} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">Python</span>
                </CardSkillsIcon>
                <CardSkillsIcon>
                    <Image src={imgRT} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">React JS</span>
                </CardSkillsIcon>
                <CardSkillsIcon>
                    <Image src={imgCS} alt='sdsasd' className="w-full h-full object-contain" />
                    <span className="flex items-center justify-center mt-2 text-xl font-kantumruy text-white-600 font-medium">Css</span>
                </CardSkillsIcon>
            </div>
        </div>
    );

}