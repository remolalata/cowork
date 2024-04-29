import { Children } from "@/types/customTypes"

interface SectionHeadingProps {
    children: Children
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
    return <h2 className="font-general-sans font-semibold font-xs text-center">{props.children}</h2>
}

export default SectionHeading;