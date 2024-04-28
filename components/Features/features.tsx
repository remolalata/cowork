import Image from "next/image";

import Feature from "./Feature/feature";
import { Features as FeaturesType } from "@/types/customTypes";

interface FeaturesProps {
    data: FeaturesType
}

const Features: React.FC<FeaturesProps> = (props) => {
    return (
        <div className="container py-16 lg:py-28">
            <h2 className="font-neue-regrade text-2xl lg:text-5xl leading-normal lg:leading-normal text-center flex items-center justify-center flex-wrap gap-x-4 gap-y-1">
                <span className="">Why choose</span>
                <span className="feature-pattern" aria-hidden="true"></span>
                <span className="">Cowork?</span>
            </h2>

            {props.data.length > 0 && 
                <div className="flex flex-col md:flex-row gap-y-8 gap-x-12 mt-10 md:mt-20">
                    {props.data.map((item, index) => 
                        <Feature key={index} data={item} />
                    )}
                </div>
            }

        </div>
    )
}

export default Features;