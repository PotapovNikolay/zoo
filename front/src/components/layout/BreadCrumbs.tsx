import { useRouter } from "next/router";
import arrowWhite from "@icons/arrows/navigate_next.svg";
import arrowGray from "@icons/arrows/navigate_next_gray.svg";
import Image from "next/image";
import Link from "next/link";
import { BreadCrumbsType } from "@types";

type bgType = "blue" | "gray";

interface BreadCrumbsProps {
    props?: BreadCrumbsType;
    bg?: bgType;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
    props = {},
    bg = "blue",
}) => {
    const router = useRouter();

    return (
        <div
            className={
                " font-normal  z-10 hidden lg:block" +
                (bg === "blue"
                    ? "bg-main-blue text-white px-16 pt-4"
                    : " bg-main-gray text-gray-500 ")
            }
        >
            <div className=" flex items-center">
                <Link href="/" className="flex items-center">
                    <div>Главная</div>
                    <Image
                        src={bg === "blue" ? arrowWhite : arrowGray}
                        alt={"Главная"}
                        width={20}
                    />
                </Link>
                {Object.entries(props).map(([key, value], index) => {
                    if (value.path === router.asPath) {
                        return (
                            <Link
                                href={router.pathname}
                                key={Number(index)}
                                className="text-main-orange"
                            >
                                {value.title}
                            </Link>
                        );
                    } else {
                        return (
                            <Link
                                href={value.path}
                                className="flex items-center"
                                key={Number(index)}
                            >
                                <div>{value.title}</div>
                                <Image
                                    src={bg === "blue" ? arrowWhite : arrowGray}
                                    alt={value.title}
                                    width={20}
                                />
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};
