import Image from "next/image"

interface FeatureProps {
    title: string,
    content: string
}

const Feature: React.FC<FeatureProps> = (props) => {
    return (
        <div className="flex flex-col">
            <div>

            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Feature;