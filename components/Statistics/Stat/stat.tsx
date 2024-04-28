
import { Statistic } from "@/types/customTypes";

interface StatProps {
    key: number,
    index: number,
    data: Statistic
}

const Stat: React.FC<StatProps> = (props) => {
    return (
        <div className="flex flex-col justify-center text-center">
            <div className={`statistic-heading statistic-heading${props.index}`}>{props.data.count}</div>
            <div className="mt-4">{props.data.label}</div>
        </div>
    )
}

export default Stat;