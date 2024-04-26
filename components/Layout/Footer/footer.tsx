import Link from "next/link";

import Logo from "@/components/UI/Logo/logo";
import Newsletter from "./Newsletter/newsletter";
import FooterMenu from "./FooterMenu/footerMenu";

import { FOOTER_MENU_ENGAGEMENT, FOOTER_MENU_SITE_PAGES, FOOTER_MENU_SOCIAL_MEDIA } from "@/constants/menuLabelsConstants";
import { COPYRIGHT_NOTICE, ENGAGEMENT_MENU_HEADING, LEGAL_LINKS, SOCIAL_MEDIA_MENU_HEADING } from "@/constants/footerLabelsConstants";
import { SITE_PAGES_MENU_HEADING } from "@/constants/footerLabelsConstants";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container px-5 py-8 ">
        <div className="bg-humble-black text-white p-8 rounded-3xl">
          <div className="flex flex-col lg:flex-row justify-between gap-x-32 gap-y-10">
            <div className="lg:w-[500px]">
              <div className="w-fit mx-auto md:ml-0">
                <Logo invert={true} />
              </div>
              <div className="mt-8">
                <Newsletter />
              </div>
            </div>
            <div className="lg:w-[588px] flex flex-col md:flex-row gap-y-6 gap-x-[40px]">
              <div className="lg:w-1/3">
                <FooterMenu heading={SITE_PAGES_MENU_HEADING} data={FOOTER_MENU_SITE_PAGES} />
              </div>
              <div className="lg:w-1/3">
                <FooterMenu heading={ENGAGEMENT_MENU_HEADING} data={FOOTER_MENU_ENGAGEMENT} />
              </div>
              <div className="lg:w-1/3">
                <FooterMenu heading={SOCIAL_MEDIA_MENU_HEADING} data={FOOTER_MENU_SOCIAL_MEDIA} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:flex-row items-center gap-y-8">
            <div className="text-center md:text-left">{COPYRIGHT_NOTICE}</div>
            <ul className="w-full flex items-center justify-between underline">
              <li>
                <Link href="#">{LEGAL_LINKS.PRIVACY_POLICY}</Link>
              </li>
              <li>
                <Link href="#">{LEGAL_LINKS.SERVICE_TERMS}</Link>
              </li>
              <li>
                <Link href="#">{LEGAL_LINKS.COOKIE_SETTINGS}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
