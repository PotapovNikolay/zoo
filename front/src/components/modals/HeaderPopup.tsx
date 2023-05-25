import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeaderPopupProps {
    show: Boolean;
}

export const HeaderPopup: React.FC<HeaderPopupProps> = ({ show }) => {
    const [visible, setVisible] = useState<Boolean>(true);
    const popupRef = useRef(null);

    useEffect(() => {
        if (!show) {
            setTimeout(() => setVisible(false), 200);
        } else {
            setVisible(true);
        }
    }, [show]);

    return (
        <div
            ref={popupRef}
            className={
                " flex  justify-center absolute -bottom-32 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.5, 1, 0.89, 1)] " +
                (show
                    ? " translate-y-5 opacity-100 h-56"
                    : " -translate-y-5 opacity-0 h-0")
            }
        >
            <div className="w-7/12 px-4 py-6 z-50 h-full bg-white rounded-xl shadow-md flex flex-col justify-center">
                {visible ? (
                    <div className="flex justify-around space-x-10 text-main-blue z-50">
                        <div className="flex flex-col space-y-1">
                            <Link
                                href="/animals"
                                className="text-main-blue text-xl font-bold"
                            >
                                О животных
                            </Link>
                            <Link href="/animals/mammals">Млекопитающие</Link>
                            <Link href="/animals/birds">Птицы</Link>
                            <Link href="/animals/reptiles">Рептилии</Link>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="text-main-blue text-xl font-bold">
                                О нас
                            </div>
                            <Link href="/about/actual">Актуальное</Link>
                            {/* <Link href="/about">Благотворительность</Link> */}
                            <Link href="/about/qr">QR-коды</Link>
                            <Link href="/about/map">Интерактивная карта</Link>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <div className="text-main-blue text-xl font-bold">
                                Специалистам
                            </div>
                            <Link href="/specialists/offer">
                                Ищем предлагаем животных
                            </Link>
                            <Link href="/specialists/job">Вакансии</Link>
                            {/* <Link href="/specialists/docs">Документы</Link> */}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="text-main-blue text-xl font-bold">
                                Гостям
                            </div>
                            <Link href="/guests/contacts">Контакты</Link>
                            <Link href="/guests/tickets">Билеты</Link>
                            <Link href="/guests/reviews">Отзывы</Link>
                            <Link href="/guests/FAQ">Вопрос ответ</Link>
                            <Link href="/guests/rules">Правила поведения</Link>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
