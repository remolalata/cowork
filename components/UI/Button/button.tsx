import { Children } from "@/types/customTypes"

interface ButtonProps {
    invert?: boolean,
    children: Children
}

const Button: React.FC<ButtonProps> = (props) => {

    const buttonStyle = props.invert ? "bg-white text-humble-black" : "bg-black text-white";

    return (
        <button className={`font-general-sans font-semibold text-sm rounded-full px-6 py-3 border border-humble-black ${buttonStyle}`}>{props.children}</button>
    )
}

export default Button;
