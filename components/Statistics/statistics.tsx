import Image from "next/image";
import SectionHeading from "../UI/SectionHeading/sectionHeading";
import SectionStandfirst from "../UI/SectionStandfirst/sectionStandfirst";

import Stat from "./Stat/stat";

import { STATISTICS_HEADING, STATISTICS_STANDFIRST } from "@/constants/siteLabelsConstants";
import { Statistics as StatisticsType } from "@/types/customTypes";

interface StatisticsProps {
    data: StatisticsType
}

const Statistics: React.FC<StatisticsProps> = (props) => {
    return (
        <div className="container flex flex-col items-center gap-y-10 gap-x-20 lg:flex-row py-16 lg:py-28">
            <div>
                <SectionHeading>{STATISTICS_HEADING}</SectionHeading>
                <SectionStandfirst>{STATISTICS_STANDFIRST}</SectionStandfirst>

                {props.data.length > 0 &&
                    <div className="grid grid-cols-2 grid-rows-2 mt-8 gap-6">
                        {props.data.map((item, index) => (
                            <Stat key={index} index={index} data={item} />
                        ))}
                    </div>
                }
            </div>
            <div className="relative w-full lg:w-[500px] xl:w-[600px] h-[320px] lg:h-[500px] xl:h-[600px] rounded-3xl lg:rounded-[48px] overflow-hidden">
                <Image
                    src={"/images/statistics-image.jpg"}
                    fill
                    className="object-cover"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Statistics;