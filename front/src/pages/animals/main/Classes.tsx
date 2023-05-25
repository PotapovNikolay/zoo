import Link from "next/link";


interface ClassesProps{

}

export const Classes:React.FC<ClassesProps> = () =>{

    return (
        <div className="grid grid-cols-4 grid-rows-3 mb-0 xl:mb-0 md:mb-64 gap-4 mt-6 mx-6 lg:mt-16 lg:mx-56">
            <Link
                href="/animals/mammals"
                className="col-span-3 row-span-2 bg-main-blue rounded-2xl"
            >
                <div className="text-xl lg:text-3xl font-extrabold p-6">
                    Млекопитающие
                </div>
            </Link>
            <Link
                href="/animals/birds"
                className="col-start-4 row-span-2 bg-main-blue rounded-2xl"
            >
                <div className="lg:text-3xl font-extrabold text-center pt-6  ">
                    Птицы
                </div>
            </Link>

            <Link
                href="/animals/reptiles"
                className=" col-span-4 row-start-3 bg-main-blue rounded-2xl"
            >
                <div className="text-xl lg:text-3xl font-extrabold  p-6">
                    Рептилии
                </div>
            </Link>
        </div>
    );
}