import { ReactNode, ComponentProps } from "react"
interface LapisProps extends ComponentProps<'div'> { }

export function Lapis(props: LapisProps) {
    return (
        <div className="flex items-center justify-center flex-col relative"
        >
            <div className="flex items-center justify-center">
                <section className="w-30 bg-grayl h-7 flex items-center justify-center text-sm text-white-600 font-cabin shadow-custom-button" {...props} ></section>
                <section className="w-5 bg-grayl h-7 rounded-r-4xl shadow-custom-button"></section>
                <section className="w-7 bg-yellow h-7 rounded-full shadow-custom-button"></section>
            </div>
            <section className="w-0.5 bg-white-600 h-64 flex ml-35 mt-73 absolute shadow-custom-button"></section>
        </div>
    )
} 