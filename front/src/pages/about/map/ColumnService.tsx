import Image from "next/image";


interface icon {
    icon: typeof import("*.svg");
    text: string;
}

interface ColumnServiceProps {
    icons: Array<icon>;
}

export const ColumnService: React.FC<ColumnServiceProps> = ({ icons }) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-6">
                Сервисы на территории зоопарка
            </h3>
            <div className="columns-2 space-y-3">
                {icons.map(({ icon, text }, key) => {
                    return (
                        <div key={key} className="flex items-center space-x-2">
                            <div>
                                <div
                                    className={
                                        "w-7 h-7 lg:w-10 lg:h-10 bg-main-orange rounded-full shadow-2xl cursor-pointer  "
                                    }
                                >
                                    <Image
                                        src={icon}
                                        alt={`${key}`}
                                        className={"p-1.5"}
                                    />
                                </div>
                            </div>

                            <div className="text-sm lg:text-base font-semibold">{text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
