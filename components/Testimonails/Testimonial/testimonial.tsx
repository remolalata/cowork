import Image from "next/image";

import { Testimonial as TestimonialType } from "@/types/customTypes";

interface TestimonialProps {
    data: TestimonialType,
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
    return (
        <div className="flex flex-col gap-y-6 bg-powerless-gray text-xs p-8 rounded-3xl">
            <div className="relative w-14 h-14 rounded-full mx-auto">
                <Image
                    src={props.data.user.avatar}
                    fill
                    className="object-cover"
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