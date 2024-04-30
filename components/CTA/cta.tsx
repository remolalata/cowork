import Button from "../UI/Button/button"

import { CTA_CONTENT, CTA_LABEL } from "@/constants/siteLabelsConstants";

const CTA: React.FC = (props) => {
    return (
        <div className="container py-12 lg:py-28">
            <h2 className="font-neue-regrade flex items-center justify-center flex-wrap text-5xl lg:text-8xl gap-x-5 gap-y-2">
                <span className="">Seize</span>
                <span className="cta-pattern" aria-hidden="true"></span>
                <span className="text-center">The Moment - Join Cowork Today!</span>
            </h2>
            <p className="max-w-[640px] mx-auto mt-6 text-center">{CTA_CONTENT}</p>
            <div className="w-fit mx-auto mt-10">
                <Button>{CTA_LABEL}</Button>
            </div>
        </div>
    )
}

export default CTA;