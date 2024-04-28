import Image from "next/image";

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
                <h2 className="font-semibold text-xs text-center">{STATISTICS_HEADING}</h2>
                <p className="font-neue-regrade text-2xl text-center mt-4">{STATISTICS_STANDFIRST}</p>

                {props.data.length > 0 &&
                    <div className="grid grid-cols-2 grid-rows-2 mt-8 gap-6">
                        {props.data.map((item, index) => (
                            <Stat key={index} index={index} data={item} />
                        ))}
                    </div>
                }
            </div>
            <div className="relative w-full lg:w-[640px] h-80 lg:h-[640px] rounded-3xl overflow-hidden">
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