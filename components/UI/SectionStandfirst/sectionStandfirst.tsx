import { Children } from "@/types/customTypes"

interface SectionStandfirstProps {
    children: Children
}

const SectionStandfirst: React.FC<SectionStandfirstProps> = (props) => {
    return <p className="font-neue-regrade text-2xl text-center mt-4">{props.children}</p>
}

export default SectionStandfirst;