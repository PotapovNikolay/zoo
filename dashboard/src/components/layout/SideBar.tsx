import { useSelect } from "hooks";
import React, {
    LegacyRef,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Info } from "./Info";

interface ItemProps {
    module: IModule;
    baseFolder: string;
}

const Item: React.FC<ItemProps> = ({ module, baseFolder }) => {
    const [selected, setSelect] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <li>
            <button
                onClick={() => {
                    navigate(module.path);
                    setSelect((selected) => (selected ? false : true));
                }}
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
            >
                <img src={baseFolder + module.icon} alt={module.icon} />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    {module.title}
                </span>
    
            </button>
     
        </li>
    );
};

const modules = [
    { title: "Животные", icon: "pets.svg", path: "/animals" },
    { title: "Актуальное", icon: "feed.svg", path: "/actuals" },
    { title: "Вакансии", icon: "work.svg", path: "/job" },
    { title: "Отзывы", icon: "reviews.svg", path: "/reviews" },
    { title: "FAQ", icon: "guiz.svg", path: "/faq" },
    { title: "Обр. Свзяь", icon: "feed.svg", path: "/feedback" },
    { title: "Карта", icon: "map.svg", path: "/map" },
];

interface IModule {
    title: string;
    icon: string;
    path: string;
   
}

interface SideBarProps {
    showInfo: (show: boolean) => void;
    closeMenu: (show: boolean) => void;
}

const baseFolder = "/icons/sidebar/";

export const SideBar: React.FC<SideBarProps> = ({ showInfo, closeMenu }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, []);

    function toggleTheme() {
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
                setTheme("light");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
                setTheme("dark");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
                setTheme("dark");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
                setTheme("light");
            }
        }
    }

    return (
        <div
            className=" fixed top-0 left-0 w-full lg:w-56 py-10 pl-4 pr-4 lg:pr-0 h-full bg-white dark:bg-gray-900 z-[60]"
            aria-label="Sidenav"
        >
            {/* <div className="fixed top-1/2 left-64  w-4 h-4 rounded-full bg-white"></div> */}
            <div className="overflow-y-auto py-5 px-3 rounded-2xl h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 relative">
                <ul className="space-y-2 ">
                    <li className=" flex lg:hidden justify-end absolute top-2 right-2">
                        <div onClick={()=>{closeMenu(false)}} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="px-1.5">X</span>
                        </div>
                    </li>
                    <li>
                        <Link
                            to={"/"}
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3">Главная</span>
                        </Link>
                    </li>
                    {modules.map((module: IModule, key: number) => {
                        return (
                            <Item
                                key={key}
                                module={module}
                                baseFolder={baseFolder}
                            />
                        );
                    })}
                </ul>
                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <div
                            onClick={() => {
                                showInfo(true);
                            }}
                            className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-3">Справка</span>
                        </div>
                    </li>
                </ul>

                <ul className="pt-5 mt-5 space-y-2 border-t  border-gray-200 dark:border-gray-700">
                    <li className="flex justify-center">
                        <button
                            onClick={() => {
                                toggleTheme();
                            }}
                            id="theme-toggle"
                            type="button"
                            className="flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                        >
                            <svg
                                id="theme-toggle-dark-icon"
                                className={
                                    "w-5 h-5 " +
                                    (theme === "dark" ? " hidden" : " ")
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg
                                id="theme-toggle-light-icon"
                                className={
                                    "w-5 h-5 " +
                                    (theme === "light" ? " hidden" : " ")
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
