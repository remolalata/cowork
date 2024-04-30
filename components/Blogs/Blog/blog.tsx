import Image from "next/image";

import { Blog as BlogType } from "@/types/customTypes";

interface BlogProps {
    key?: number,
    index?: number,
    data: BlogType
}

const Blog:React.FC<BlogProps> = (props) => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="relative rounded-3xl h-[300px] overflow-hidden">
                <Image
                    src={props.data.image}
                    fill
                    sizes="100vw"
                    alt=""
                    className="object-cover"
                />
            </div>
            <div className="flex items-center gap-x-4">
                <div className={`blog-tag blog-tag-${props.index}`}>{props.data.tag}</div>
                <div>{props.data.duration}</div>
            </div>
            <div className="font-neue-regrade font-bold text-2xl">
                {props.data.title}
            </div>
            <div className="w-min">
                <a href="#" className="inline-block">
                    <div className="flex items-center gap-x-2">
                        <span className="whitespace-nowrap">Read more</span>
                        <Image
                            src={"/images/icons/chevron-right.svg"}
                            width={24}
                            height={24}
                            alt=""
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Blog;