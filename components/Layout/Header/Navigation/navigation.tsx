import Image from "next/image";
import Link from "next/link";

import Button from "@/components/UI/Button/button";

import { useAppContext } from "@/context/AppContext";
import { MENU_ABOUT, MENU_BLOG, MENU_EVENTS, MENU_PRICING } from "@/constants/menuLabelsConstants";

const Navigation: React.FC = () => {
    const { state, dispatch } = useAppContext();

    const handleToggleMobileNav = () => {
        dispatch({ type: 'TOGGLE_MOBILE_NAV' });
    };
    return (
        <div>
            <div className="hidden lg:block">
                <div className="flex items-center gap-x-12">
                    <ul className="flex items-center gap-x-12">
                        <li>
                            <Link href="#">
                                {MENU_ABOUT}
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                {MENU_PRICING}
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                {MENU_BLOG}
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                {MENU_EVENTS}
                            </Link>
                        </li>
                    </ul>
                    <div className="flex gap-x-6">
                        <Button invert={true}>Login</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                <button
                    type="button"
                    className="flex items-center justify-center bg-humble-black p-3 rounded-[42px] w-[60px] h-[45px]"
                    onClick={handleToggleMobileNav}
                >
                    <Image src="/images/hamburger.svg" width={24} height={18} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Navigation;