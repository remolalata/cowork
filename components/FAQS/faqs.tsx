import Image from "next/image";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";

import SectionHeading from "../UI/SectionHeading/sectionHeading";
import SectionStandfirst from "../UI/SectionStandfirst/sectionStandfirst";

import { FAQS_HEADING, FAQS_STANDFIRST, FAQS_CONTENT } from "@/constants/siteLabelsConstants";
import { FAQS as FAQSType } from "@/types/customTypes";

interface FAQSProps {
    data: FAQSType
}

const FAQS: React.FC<FAQSProps> = (props) => {
    return (
        <div className="container flex flex-col lg:flex-row gap-y-10 gap-x-20 py-16 lg:py-28">
            <div className="text-center lg:text-left">
                <SectionHeading center={false}>{FAQS_HEADING}</SectionHeading>
                <SectionStandfirst center={false}>{FAQS_STANDFIRST}</SectionStandfirst>
                <p className="leading-7 mt-6">{FAQS_CONTENT}</p>
            </div>
            <div className="w-full">
                {props.data.length > 0 &&
                    <Accordion
                        allowZeroExpanded={true}
                        preExpanded={["0"]}
                    >
                        {props.data.map((item, index) => (
                            <AccordionItem
                                key={index}
                                uuid={index}
                                className="relative py-5 after:content-[''] after:absolute after:h-px after:w-36 after:bg-humble-black after:bottom-0"
                            >
                                <AccordionItemHeading className="font-semibold">
                                    <AccordionItemButton className="flex justify-between items-center gap-x-6">
                                        <div>
                                            {item.title}
                                        </div>
                                        <div>
                                            <AccordionItemState>
                                                {({ expanded }) => (expanded ? <Image
                                                    src={"/images/icons/circle-caret-up.svg"}
                                                    width={32}
                                                    height={32}
                                                    className="min-w-8"
                                                    alt=""
                                                /> : <Image
                                                    src={"/images/icons/circle-caret-down.svg"}
                                                    width={32}
                                                    height={32}
                                                    className="min-w-8"
                                                    alt=""
                                                />)}
                                            </AccordionItemState>

                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="mt-4">
                                    <p>{item.content}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                }
            </div>
        </div>
    )
}

export default FAQS;