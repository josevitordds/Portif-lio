import { ReactNode, ComponentProps } from "react"
interface CardSkillProps extends ComponentProps<'div'> {}

export function CardSkillsIcon(props: CardSkillProps) {
    return (
        <div className="bg-graym min-w-[300px] min-h-[250px] max-w-[60px] max-h-[60px] px-25 py-15 rounded-2xl shadow-custom-fd cursor-pointer transition-transform duration-300 hover:scale-102"
        {...props}
        >
        </div>
    )
} 