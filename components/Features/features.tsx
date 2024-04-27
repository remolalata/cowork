import Image from "next/image";

const Features: React.FC = () => {
    return (
        <div className="container py-16 lg:py-28">
            <h2 className="font-neue-regrade text-2xl lg:text-5xl leading-normal lg:leading-normal text-center flex items-center justify-center flex-wrap gap-x-4 gap-y-1">
                <span className="">Why choose</span>
                <span className="feature-pattern" aria-hidden="true"></span>
                <span className="">Cowork?</span>
            </h2>
        </div>
    )
}

export default Features;