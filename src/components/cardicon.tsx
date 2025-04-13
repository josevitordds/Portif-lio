import { ReactNode, ComponentProps } from "react"
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CardProps extends ComponentProps<'div'> {}

export function CardIcon(props: CardProps) {
    return (
        <div className="min-w-[35px] min-h-[35px] max-w-[50px] max-h-[50px] px-2 py-2 cursor-pointer text-white-600 bg-black2 flex items-center justify-center rounded-2xl  shadow-custom transition-transform duration-300 hover:scale-105"
        {...props}
        >
        </div>
    )
} 

interface LinkIconProps extends ComponentProps<'a'> {
    href: string;
    imgSrc: StaticImageData;
    alt: string;
}

export function LinkIcon({ href, imgSrc, alt, ...props }: LinkIconProps) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        <CardIcon>
          <Image src={imgSrc} alt={alt} className="w-full h-full object-contain" />
        </CardIcon>
      </a>
    )
} 