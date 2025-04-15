import { ComponentProps } from "react"

interface ButtonSlideProps extends ComponentProps<'button'>{}

export  function ButtonSlide(props: ButtonSlideProps) {
    return (
    <button className="w-25 px-5 font-cabin text-sm h-7 rounded bg-grayl text-white-600 font-regular shadow-custom-button cursor-pointer hover:bg-white-600 hover:text-grayl"
    {...props}
    >
    </button>
)
}