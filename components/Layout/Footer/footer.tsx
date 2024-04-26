import Link from "next/link";

import { COPYRIGHT_NOTICE, LEGAL_LINKS } from "@/constants/footerLabelsConstants";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container px-5 py-8 ">
        <div className="bg-humble-black p-12 rounded-3xl">

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
