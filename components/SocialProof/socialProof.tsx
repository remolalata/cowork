import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

import { SOCIAL_PROOF_HEADING, SOCIAL_PROOF_IMAGES } from "@/constants/siteLabelsConstants";

import 'swiper/css';
import { SocialProof as SocialProofType } from "@/types/customTypes";

interface SocialProofProps {
    data: SocialProofType
}

const SocialProof: React.FC<SocialProofProps> = (props) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container social-proof py-12 lg:py-28">
            <h2 className="font-general-sans font-semibold font-xs text-center">{SOCIAL_PROOF_HEADING}</h2>

            {props.data.length > 0 &&
                <div className="mt-6">
                    {isMobile ? (
                        <Swiper
                            slidesPerView={3.2}
                            spaceBetween={24}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {props.data.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <Image
                                        src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        alt={item.label}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    ) : (
                        <ul className="w-fit mx-auto flex items-center gap-x-12">
                            {props.data.map((item, index) =>
                                <li key={index}>
                                    <Image
                                        src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        alt={item.label}
                                    />
                                </li> 
                            )}
                        </ul>
                    )}

                </div>
            }
        </div>
    )
}

export default SocialProof;