import { useState, useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import SectionHeading from "../UI/SectionHeading/sectionHeading";

import { SOCIAL_PROOF_HEADING } from "@/constants/siteLabelsConstants";

import 'swiper/css';
import { SocialProof as SocialProofType } from "@/types/customTypes";

interface SocialProofProps {
    data: SocialProofType
}

const SocialProof: React.FC<SocialProofProps> = (props) => {
    const { state } = useAppContext();

    return (
        <div className="container social-proof py-12 lg:py-28">
            <SectionHeading>{SOCIAL_PROOF_HEADING}</SectionHeading>

            {props.data.length > 0 &&
                <div className="mt-6">
                    {state.isMobile ? (
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