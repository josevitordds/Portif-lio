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
import { ButtonSlide } from '@/components/buttonslide';
import { ButtonSwiper } from '@/components/buttonswiper';

export default function SwiperProjet() {
    const projetos = [
        img1, img2,img3
    ];
    const linkProjetos = [

    ]

    const GithubProjetos = [

    ]
    return (
        <div className="relative w-full h-129">
         <button className="swiper-button-prev-custom flex flex-col space-y-6 cursor-pointer absolute -left-20 top-1/2 -translate-y-1/2 z-10 p-3 rotate-180" >
                <section className="w-10 h-0.5 bg-yellow rotate-45"
                >
                </section>
                <section className="w-10 h-0.5 bg-yellow -rotate-45"></section>
            </button>
            <button className="swiper-button-next-custom flex flex-col space-y-6 cursor-pointer absolute -right-20 top-1/2 -translate-y-1/2 z-10 p-3" >
                <section className="w-10 h-0.5 bg-yellow rotate-45"
                >
                </section>
                <section className="w-10 h-0.5 bg-yellow -rotate-45"></section>
            </button>
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Navigation]}
            className="flex w-full h-129 items-center justify-center"
          >
            {projetos.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col ">
                  <Image
                    src={img}
                    alt="projeto"
                    className="w-full h-full object-contain relative rounded-xl"
                  />
                  <div className="flex w-full h-full items-end justify-start space-x-2 absolute ml-5 pb-3">
                    <ButtonSlide>GitHub</ButtonSlide>
                    <ButtonSlide>Site</ButtonSlide>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );

}
