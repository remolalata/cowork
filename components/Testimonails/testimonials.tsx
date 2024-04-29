import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { useAppContext } from "@/context/AppContext";

import SectionHeading from "../UI/SectionHeading/sectionHeading";
import SectionStandfirst from "../UI/SectionStandfirst/sectionStandfirst";
import Testimonial from "./Testimonial/testimonial";

import { Testimonials as TestimonialsType } from "@/types/customTypes";
import { TESTIMONIALS_HEADING, TESTIMONIALS_STANDFIRST } from "@/constants/siteLabelsConstants";


interface TestimonailsProps {
    data: TestimonialsType
}

const Testimonials: React.FC<TestimonailsProps> = (props) => {
    const { state } = useAppContext();

    return (
        <div className="container py-12 lg:py-28">
            <SectionHeading>{TESTIMONIALS_HEADING}</SectionHeading>
            <SectionStandfirst>{TESTIMONIALS_STANDFIRST}</SectionStandfirst>

            {props.data.length > 0 &&
                <div className="mt-6">
                    {state.isMobile ? (
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {props.data.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <Testimonial data={item} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    ) : (
                        <div className="grid grid-cols-3 grid-flow-row gap-8">
                            {props.data.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <Testimonial data={item} />
                                </SwiperSlide>
                            )}
                        </div>
                    )}

                </div>
            }
        </div>
    );
}

export default Testimonials;