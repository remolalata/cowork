import Image from "next/image";
import Link from "next/link";

import Button from "@/components/UI/Button/button";

import { useAppContext } from "@/context/AppContext";
import { HEADER_MENU } from "@/constants/menuLabelsConstants";

const Navigation: React.FC = () => {
    const { state, dispatch } = useAppContext();

    const handleToggleMobileNav = () => {
        dispatch({ type: 'TOGGLE_MOBILE_NAV' });
    };
    return (
        <div>
            <div className="hidden lg:block">
                <div className="flex items-center gap-x-12">
                    {HEADER_MENU.length > 0 &&
                        <ul className="flex items-center gap-x-12">
                            {HEADER_MENU.map((item, index) =>
                                <li key={index}>
                                    <Link href={item.link}>
                                        {item.label}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    }
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
                    aria-label="open menu"
                >
                    <Image src="/images/hamburger.svg" width={24} height={18} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Navigation;