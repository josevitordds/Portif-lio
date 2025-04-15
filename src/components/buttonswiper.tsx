import { div } from "framer-motion/client"
import { ComponentProps } from "react"

interface ButtonSwiperProps extends ComponentProps<'section'>{}

export  function ButtonSwiper(props: ButtonSwiperProps) {
    return (
    <div className="flex flex-col space-y-6 cursor-pointer" >
        <section className="w-10 h-0.5 bg-yellow rotate-45"
    {...props}
    >
    </section>
    <section className="w-10 h-0.5 bg-yellow -rotate-45"></section>
    </div>

)
}