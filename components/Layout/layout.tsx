import Header from "./Header/header";
import Footer from "./Footer/footer";

import { Children } from "@/types/customTypes";

type Props = {
    children: Children
}

const Layout: React.FC<Props> = ({ children }) => {
    return  (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;