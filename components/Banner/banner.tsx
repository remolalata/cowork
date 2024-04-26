import Image from "next/image";

import Button from "../UI/Button/button";

const Banner: React.FC = () => {
    return (
        <div className="container py-16 lg:py-28 flex flex-col lg:flex-row items-center justify-between gap-y-10 gap-x-8">
            <div className="text-center lg:text-left">
                <h1 className="font-neue-regrade font-bold text-5xl lg:text-8xl leading-tight lg:leading-tight">
                    Elevate Your Workspace with <span className="relative z-20 inline-block before:content-[''] before:absolute before:-inset-x-2.5 before:-inset-y-2.5 before:bg-hero-title-pattern before:bg-no-repeat before:bg-center before:bg-contain before:z-10"><span className="relative z-20">Cowork</span></span>
                </h1>
                <p className="mt-6 lg:mt-8 leading-6">Welcome to Cowork – where innovation meets collaboration in the heart  of productivity! Unleash 🚀 your potential in our thoughtfully designed coworking spaces, tailored to inspire creativity and foster connections.</p>
                <div className="w-fit mx-auto lg:ml-0 mt-10 lg:mt-12">
                    <Button>Claim Your Spot</Button>
                </div>
            </div>
            <div className="w-full">
                <div className="relative w-full lg:w-[640px] h-[320px] lg:h-[640px] rounded-3xl lg:rounded-[48px] overflow-hidden">
                    <Image
                        src={"/images/hero.jpg"}
                        alt="Two people having a meeting in a modern office lounge with stylish seating and vibrant decor."
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner;