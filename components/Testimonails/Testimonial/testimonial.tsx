import Image from "next/image";

import { Testimonial as TestimonialType } from "@/types/customTypes";

interface TestimonialProps {
    index: number,
    data: TestimonialType,
    style?: string
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
    return (
        <div className={`testimonial-item testimonial-item-${props.index} ${props?.style}`}>
            <div className="relative w-14 h-14 mx-auto">
                <Image
                    src={props.data.user.avatar}
                    width={56}
                    height={56}
                    className="rounded-full"
                    alt={props.data.user.name}
                />
            </div>
            <div>{props.data.comment}</div>
            <div className="flex flex-col items-center">
                <div className="font-general-sans font-semibold">{props.data.user.name}</div>
                <div>{props.data.user.title}</div>
            </div>
        </div>
    )
}

export default Testimonial;