import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

import { SOCIAL_PROOF_IMAGES } from "@/constants/siteLabelsConstants";

import 'swiper/css';

const SocialProof: React.FC = () => {

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
            <h2 className="font-general-sans font-semibold font-xs text-center">TRUSTED BY LEADING COMPANIES</h2>

            {SOCIAL_PROOF_IMAGES.length > 0 &&
                <div className="mt-6">
                    {isMobile ? (
                        <Swiper
                            slidesPerView={3.2}
                            spaceBetween={24}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {SOCIAL_PROOF_IMAGES.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <Image
                                        src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        alt={item.alt}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    ) : (
                        <ul className="w-fit mx-auto flex items-center gap-x-12">
                            {SOCIAL_PROOF_IMAGES.map((item, index) =>
                                <li key={index}>
                                    <Image
                                        src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        alt={item.alt}
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