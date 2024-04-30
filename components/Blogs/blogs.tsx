
import SectionHeading from "../UI/SectionHeading/sectionHeading";
import Blog from "./Blog/blog";
import Button from "../UI/Button/button";

import { BLOGS_HEADING, BLOGS_CONTENT } from "@/constants/siteLabelsConstants";
import { Blogs as BlogsType } from "@/types/customTypes";

interface BlogsProps {
    data: BlogsType
}

const Blogs: React.FC<BlogsProps> = (props) => {
    return (
        <div className="container py-16 lg:py-28">
            <SectionHeading>{BLOGS_HEADING}</SectionHeading>
            <h3 className="font-neue-regrade text-2xl lg:text-5xl leading-normal lg:leading-normal text-center flex items-center justify-center flex-wrap gap-x-4 gap-y-1 mt-4">
                <span className="">Insights, Innovation, and</span>
                <span className="blogs-pattern" aria-hidden="true"></span>
                <span className="">Inspiration</span>
            </h3>
            <p className="mt-6 text-center">{BLOGS_CONTENT}</p>
            {props.data.length > 0 &&
                <>
                    <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 mt-10 lg:mt-20">
                        {props.data.map((item, index) => <Blog key={index} index={index} data={item} />)}
                    </div>

                    <div className="w-fit mx-auto mt-6 lg:mt-16">
                        <Button invert={true}>View All</Button>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Blogs;
