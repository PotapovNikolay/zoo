import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PopupMobileProps {
    closeMenu: Dispatch<SetStateAction<boolean>>;
}

export const PopupMobile: React.FC<PopupMobileProps> = ({ closeMenu }) => {
    return (
        <div className="fixed left-0 top-0 bottom-0 w-4/5 md:w-2/5 p-4 flex flex-col space-y-4 text-main-blue bg-white  z-[70]">
            <div className="flex justify-between mb-2">
                <Link
                    href="/"
                    className=" z-30  "
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    <div className="text-xl font-black">БЕЛZOO</div>
                </Link>
                <button
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-8 h-8"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col space-y-1">
                <Link
                    href="/animals"
                    onClick={() => {
                        closeMenu(false);
                    }}
                    className=" text-lg font-bold"
                >
                    О животных
                </Link>
                <Link
                    href="/animals/mammals"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Млекопитающие
                </Link>
                <Link
                    href="/animals/birds"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Птицы
                </Link>
                <Link
                    href="/animals/reptiles"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Рептилии
                </Link>
            </div>
            <div className="flex flex-col space-y-1">
                <div className=" text-lg font-bold">О нас</div>
                <Link
                    href="/about/actual"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Актуальное
                </Link>
                {/* <Link href="/about">Благотворительность</Link> */}
                <Link
                    href="/about/qr"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    QR-коды
                </Link>
                <Link
                    href="/about/map"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Интерактивная карта
                </Link>
            </div>

            <div className="flex flex-col space-y-1">
                <div className=" text-lg font-bold">Специалистам</div>
                <Link
                    href="/specialists/offer"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Ищем предлагаем животных
                </Link>
                <Link
                    href="/specialists/job"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Вакансии
                </Link>
                {/* <Link href="/specialists/docs">Документы</Link> */}
            </div>
            <div className="flex flex-col space-y-1">
                <div className=" text-lg font-bold">Гостям</div>
                <Link
                    href="/guests/contacts"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Контакты
                </Link>
                <Link
                    href="/guests/tickets"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Билеты
                </Link>
                <Link
                    href="/guests/reviews"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Отзывы
                </Link>
                <Link
                    href="/guests/FAQ"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Вопрос ответ
                </Link>
                <Link
                    href="/guests/rules"
                    onClick={() => {
                        closeMenu(false);
                    }}
                >
                    Правила поведения
                </Link>
            </div>
        </div>
    );
};
