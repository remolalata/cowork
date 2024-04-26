import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/UI/Logo/logo';

import { useAppContext } from '@/context/AppContext';

import { HEADER_MENU } from '@/constants/menuLabelsConstants';

const MobileNavigation: React.FC = () => {
    const { state, dispatch } = useAppContext();

  const showNav = state.toggleMobileNav
    ? 'w-full'
    : 'w-0';

  const handleToggleMobileNav = () => {
    dispatch({ type: 'TOGGLE_MOBILE_NAV' });
  };

    return (
        <div className={`bg-humble-black absolute top-0 left-0 h-full overflow-hidden transition-[width] duration-300 delay-0 ${showNav}`}>
            <div className="flex items-center justify-between px-5 py-7">
                <Logo invert={true} />
                <button className="flex items-center justify-center w-[60px] h-[45px]" onClick={handleToggleMobileNav}>
                    <Image
                        src={"/images/close.svg"}
                        width={20}
                        height={20}
                        alt=""
                    />
                </button>
            </div>
            <nav className="px-5 py-6">
            {HEADER_MENU.length > 0 &&
                <ul className="flex flex-col font-neue-regrade font-bold text-5xl text-white gap-8">
                    {HEADER_MENU.map((item, index) => 
                        <li key={index}>
                            <Link href={item.link}>
                                {item.label}
                            </Link>
                        </li>
                    )}
                </ul>
            }
            </nav>
            <div className="flex items-center gap-x-6 absolute right-5 bottom-6 font-general-sans font-semibold text-sm text-white px-5">
                <Link href="#" className="block py-3 px-6">Sign Up</Link>
                <Link href="#" className="block py-3 px-6 bg-white text-humble-black rounded-full">Login</Link>
            </div>
        </div>
    );
};

export default MobileNavigation;
