import { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { AppDispatch, useAppSelector } from "store";
import { useDispatch } from "react-redux";
import { Info } from "./Info";
import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [showSideBar, setShowSideBar] = useState<boolean>(true);
    const isAuth = useAppSelector((state) => state.auth.user);

    return (
        <div className={"font-Montserrat "}>
            <Header openMenu={setShowSideBar} />
            {isAuth && showSideBar && (
                <div className=" ">
                    <SideBar showInfo={setShowInfo} closeMenu={setShowSideBar} />
                </div>
            )}
            {showInfo && <Info closeInfo={setShowInfo} />}
            <div
                className={
                    " relative min-h-screen bg-white dark:bg-gray-900" +
                    (isAuth ? " lg:ml-56" : "")
                }
            >
                {children}
            </div>
        </div>
    );
};
