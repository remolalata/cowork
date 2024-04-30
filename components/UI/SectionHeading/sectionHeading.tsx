import { Children } from "@/types/customTypes"

interface SectionHeadingProps {
    children: Children,
    center?: boolean
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
    return (
        <h2 className={`font-general-sans font-semibold font-xs ${props.center !== false ? "text-center" : ""}`}>
            {props.children}
        </h2>
    );
}

export default SectionHeading;
