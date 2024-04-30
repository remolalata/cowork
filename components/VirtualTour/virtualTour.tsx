import Image from "next/image";

import SectionHeading from "../UI/SectionHeading/sectionHeading";
import Button from "../UI/Button/button";

import { VIRTUAL_TOUR_HEADING, VIRTUAL_TOUR_BUTTON_LABEL } from "@/constants/siteLabelsConstants";

const VirtualTour: React.FC = () => {
    return (
        <div className="container py-12 lg:py-28">
            <SectionHeading>{VIRTUAL_TOUR_HEADING}</SectionHeading>
            <h3 className="font-neue-regrade text-2xl lg:text-5xl leading-normal lg:leading-normal text-center flex items-center justify-center flex-wrap gap-x-4 gap-y-1 mt-4">
                <span className="">Explore Cowork Through our</span>
                <span className="virtual-tour-pattern" aria-hidden="true"></span>
                <span className="">Lens</span>
            </h3>
            <div className="w-fit mx-auto mt-10">
                <Button invert={true}>{VIRTUAL_TOUR_BUTTON_LABEL}</Button>
            </div>
            <div className="relative w-full h-80 md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden mt-10 lg:mt-20">
                <Image
                    src={"/images/virtual-tour-image.jpg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="w-full h-full object-cover"
                    alt=""
                />
                <div className="absolute w-16 lg:w-32 h-[52px] lg:h-[102px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer">
                    <Image
                        src={"/images/play-button.svg"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default VirtualTour;