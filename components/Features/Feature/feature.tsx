import Image from "next/image"

import { FeatureIcon } from "@/types/customTypes"

interface Feature {
    icon: FeatureIcon,
    heading: string,
    content: string
}

interface FeatureProps {
    data: Feature
}

const Feature: React.FC<FeatureProps> = (props) => {
    return (
        <div className="flex flex-col gap-y-4 text-center">
            <div className="flex justify-center">
                <Image
                    src={props.data.icon.src}
                    width={props.data.icon.width}
                    height={props.data.icon.height}
                    alt={props.data.icon.alt}
                />
            </div>
            <h3 className="font-neue-regrade font-bold text-base">{props.data.heading}</h3>
            <p>{props.data.content}</p>
        </div>
    )
}

export default Feature;