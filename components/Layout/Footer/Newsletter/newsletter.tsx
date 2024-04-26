import Button from "@/components/UI/Button/button";

import { NEWSLETTER_BUTTON_LABEL, NEWSLETTER_DISCLAIMER, NEWSLETTER_HEADING, NEWSLETTER_INPUT_PLACEHOLDER } from "@/constants/footerLabelsConstants";

const Newsletter: React.FC = () => {


    return (
        <div>
            <h3 className="text-center md:text-left">{NEWSLETTER_HEADING}</h3>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
                <input type="text" placeholder={NEWSLETTER_INPUT_PLACEHOLDER} className="w-full p-3 bg-transparent border-b border-white focus:outline-none" />
                <div className="max-w-28 mx-auto">
                    <Button invert={true}>{NEWSLETTER_BUTTON_LABEL}</Button>
                </div>
            </div>
            <div className="mt-6 text-center md:text-left">{NEWSLETTER_DISCLAIMER}</div>
        </div>
    )
}

export default Newsletter;