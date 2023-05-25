interface PreviewProps {}

export const Preview: React.FC<PreviewProps> = () => {
    return (
        <div className="hidden lg:block bg-main-gray px-28 mt-10 grow">
            <div className="text-lg opacity-0">Выбранные билеты</div>
            <div className="flex space-x-4 items-center bg-main-blue p-6 px-8 rounded-xl">
                <h3 className="text-2xl font-semibold">
                    Входной билет на территорию зоопарка
                </h3>
                <div className="bg-main-orange rounded-lg px-3 text-center text-xl flex justify-center items-center">
                    <div>0+</div>
                </div>
            </div>
        </div>
    );
};
