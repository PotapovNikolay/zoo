import { BreadCrumbs } from "@/src/components/layout";
import Head from "next/head";
import {
    search,
    gift,
    geo,
    phone,
    mail,
    exclamation,
    contacts,
} from "@icons/pages/offer";
import Image from "next/image";
import { axios } from "@/src/utils/fetcher";
import { AnimalType } from "@/src/types";

interface SearchProps {
    animals: AnimalType[];
}

const Search: React.FC<SearchProps> = ({ animals }) => {
    return (
        <div className="flex justify-center mt-6 lg:mt-10 mx-6 lg:mx-0  text-main-orange ">
            <div className="lg:w-3/5 w-full bg-white p-4 px-8 rounded-2xl shadow-md">
                <div className="flex items-center space-x-4 pb-4 border-b-2 border-main-orange border-opacity-50">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-main-orange rounded-xl relative">
                        <Image
                            src={search}
                            alt="gift"
                            fill
                            className="p-1.5 lg:p-2"
                        />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold">Ищем</h3>
                </div>
                <div className="flex space-x-2 lg:space-x-0 pt-4">
                    {animals.map((animal, key) => {
                        return (
                            <div key={key} className=" flex flex-col lg:w-32">
                                <div className="w-10 h-10 rounded-xl bg-main-orange relative">
                                    <Image
                                        src={`/images/${animal.animal_images[0].path}`}
                                        alt={"animal"}
                                        fill
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="text-sm mt-2 w-24">
                                    {animal.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

interface OfferProps {
    animals: AnimalType[];
}

const Offer: React.FC<OfferProps> = ({ animals }) => {
    return (
        <div className="flex justify-center  mt-10 mx-6 lg:mx-0 text-main-blue ">
            <div className="lg:w-3/5 w-full bg-white p-4 px-8 lg:p-8 rounded-2xl shadow-md">
                <div className="flex items-center space-x-4 pb-4 border-b-2 border-main-blue border-opacity-50">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-main-blue rounded-lg lg:rounded-xl relative">
                        <Image
                            src={gift}
                            alt="gift"
                            fill
                            className="p-1.5 lg:p-2"
                        />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                        Предлагаем
                    </h3>
                </div>
                <div className="flex space-x-2 lg:space-x-0 pt-4">
                    {animals.map((animal, key) => {
                        return (
                            <div key={key} className=" flex flex-col lg:w-32">
                                <div className="w-10 h-10 rounded-xl bg-main-blue relative">
                                    <Image
                                        src={`/images/${animal.animal_images[0].path}`}
                                        alt={"animal"}
                                        fill
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="text-sm mt-2 w-24">
                                    {animal.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const offer = [
    { name: "Виандот карликовый" },
    { name: "Цесарка обыкновенная" },
    { name: "Фазан обыкновенный" },
    { name: "Китайская шелковая курица" },
    { name: "Утка кряква" },
];

export const getStaticProps = async ({ params }: any) => {
    let response = null;

    const { data } = await axios.get(`/animals`);

    response = data.animals;

    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: { response },
    };
};

export default function SearchOffer({ response }: any) {
    const offerAnimals = [];
    const lookAnimals = [];

    for (let animal of response) {
        if (animal.offer) {
            offerAnimals.push(animal);
        } else if (animal.look) {
            lookAnimals.push(animal);
        }
    }

    return (
        <div className="bg-main-gray rounded-b-2xl ">
            <Head>
                <title>Ищем/предлагаем животных</title>
            </Head>
            <BreadCrumbs
                props={{
                    root: {
                        path: "/specialists/offer",
                        title: "Ищем/предлагаем животных",
                    },
                }}
            />
            <div className="bg-main-blue rounded-b-2xl pb-8"></div>
            <Offer animals={offerAnimals} />
            <Search animals={lookAnimals} />
            <div className="flex justify-center mx-3 lg:mx-0 mt-6  lg:mt-10  text-main-red ">
                <div className="lg:w-3/5 bg-white p-8 rounded-2xl shadow-md">
                    <div className="flex items-center space-x-4 pb-4 border-b-2 border-main-red border-opacity-50">
                        <div>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-main-red rounded-lg lg:rounded-xl relative">
                                <Image
                                    src={exclamation}
                                    alt="gift"
                                    fill
                                    className="p-1.5 lg:p-2"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-semibold">
                            Я нашел дикое животное, что делать?
                        </h3>
                    </div>
                    <div className="flex flex-col pt-4">
                        <ol className="list-none space-y-2 font-semibold">
                            <li className=" ">
                                НЕ НЕСИТЕ его в Зоопарк! В соответствии с
                                ветеринарным законодательством мы не имеем права
                                принимать найденных, раненых или мертвых диких
                                животных. Для этого есть специальные службы.
                            </li>
                            <li>
                                НЕ ТРОГАЙТЕ дикое животное, оно может быть
                                переносчиком болезней, опасных для человека.
                            </li>
                            <li>
                                Если животное ранено, НЕ ТРОГАЙТЕ его, а
                                обратитесь в Управление экологического и
                                охотничьего надзора по Белгородской области.
                            </li>
                            <li>
                                Если вы нашли птенца, НЕ ТРОГАЙТЕ его. Скорее
                                всего птенец учится летать, и родители находятся
                                поблизости.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mx-3 lg:mx-0 mt-6 lg:mt-10  text-main-blue ">
                <div className="lg:w-3/5 w-full bg-white p-4 px-8 lg:p-8 rounded-2xl shadow-md">
                    <div className="flex items-center space-x-4 pb-4 border-b-2 border-main-blue border-opacity-50">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-main-blue rounded-lg lg:rounded-xl relative">
                            <Image
                                src={contacts}
                                alt="gift"
                                fill
                                className="p-1.5 lg:p-2"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Наши контакты
                        </h3>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center pt-4 ">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white rounded-lg p-2 w-10 h-10 ">
                                <Image src={geo} alt={"geo"} width={100} />
                            </div>
                            <div>Волчанская ул. 292Ж</div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-white rounded-lg p-2 w-10 h-10 ">
                                <Image src={phone} alt={"geo"} width={100} />
                            </div>
                            <div>+7(123)-456-78-90</div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-white rounded-lg p-2 w-10 h-10 ">
                                <Image src={mail} alt={"geo"} width={100} />
                            </div>
                            <div>belzoo@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
