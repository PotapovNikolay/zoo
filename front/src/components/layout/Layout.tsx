import { Header, Footer } from "@components/layout";
import { HeaderMobile } from "./HeaderMobile";
import { useEffect, useState } from "react";
import { PopupMobile } from "@components/modals";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        showMenu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [showMenu]);

    return (
        <>
            <Header />
            <HeaderMobile openMenu={setShowMenu} />
            {showMenu && <PopupMobile closeMenu={setShowMenu} />}
            <main>{children}</main>
            <Footer />
        </>
    );
};
