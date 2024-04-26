import Logo from "@/components/UI/Logo/logo";
import Navigation from "./Navigation/navigation";
import MobileNavigation from "./Navigation/MobileNavigation/mobileNavigation";

const Header: React.FC = () => {
  return (
    <header className="overflow-hidden">
      <div className="container mx-auto py-7">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <Navigation />
          </div>
        </div>
      </div>

      <MobileNavigation />
    </header>
  );
};

export default Header;
