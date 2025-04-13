"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../../../../public/Bg1.png"
import img2 from "../../../../public/Bg2.png"
import img3 from "../../../../public/Bg3.png"
import { Button } from '@/components/button';

export default function SwiperProjet() {
    const projetos = [
        img1, img2,img3
    ];
    const linkProjetos = [

    ]

    const GithubProjetos = [

    ]
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="flex w-full h-129 items-center justify-center">
                {projetos.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col">
                            <Image src={img} alt='sdlkd'  className="w-full h-full object-contain relative"/>
                            <div className="flex w-full h-full items-end justify-start space-x-2 absolute ml-5 pb-3">
                                <Button>git</Button>
                                <Button>site</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );

}