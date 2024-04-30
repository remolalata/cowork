import { Children } from "@/types/customTypes"

interface SectionStandfirstProps {
    children: Children,
    center?: boolean
}

const SectionStandfirst: React.FC<SectionStandfirstProps> = (props) => {
    return <p className={`font-neue-regrade text-2xl mt-4 ${props.center !== false ? "text-center" : ""}`}>{props.children}</p>
}

export default SectionStandfirst;