interface MapProps {}

export const Map: React.FC<MapProps> = () => {
    
    return (
        <div className="bg-main-gray">
            <h2 className="text-center text-main-blue uppercase mb-6 lg:mb-12 pt-[30rem] lg:pt-0">
                Мы на карте
            </h2>
            <div className="mx-6 lg:mx-24 rounded-2xl overflow-hidden">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b27be9d3de4af0e8c0a064a72706f922038a7c449e4808d62a48ae420b9ba0e&amp;source=constructor"
                    width="100%"
                    height="515"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};
