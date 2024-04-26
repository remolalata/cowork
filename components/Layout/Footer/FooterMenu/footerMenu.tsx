import Link from "next/link"

import { FooterMenuEnagement, FooterMenuSitePages, FooterMenuSocialMedia } from "@/types/menuTypes"

interface FooterMenuProps {
    heading: string,
    data: FooterMenuSitePages | FooterMenuEnagement | FooterMenuSocialMedia
}

const FooterMenu: React.FC<FooterMenuProps> = (props) => {
    return (
        <div className="w-full text-center lg:text-left">
            <h3 className="font-general-sans font-semibold text-xs">{props.heading}</h3>
            {props.data && props.data.length > 0 && (
                <ul className="mt-2 lg:mt-4">
                    {props.data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className="block leading-7 lg:leading-10">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FooterMenu;