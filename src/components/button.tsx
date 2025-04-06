import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'>{}

export  function Button(props: ButtonProps) {
    return (
    <button className="w-25 px-5 font-cabin text-sm h-7 rounded bg-yellow text-black font-semibold shadow-custom-button cursor-pointer hover:bg-black hover:text-yellow"
    {...props}
    >
    </button>
)
}