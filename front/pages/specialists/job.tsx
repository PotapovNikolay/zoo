import { ButtonPrimary } from "@/src/components/buttons";
import { BreadCrumbs } from "@/src/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { axios } from "@fetcher";

interface ItemProps {
    text: string;
    title: string;
}

const Item: React.FC<ItemProps> = ({ title, text }) => {
    const router = useRouter();

    function toContacts() {
        router.push("/guests/contacts");
    }

    return (
        <div className="flex bg-white rounded-2xl p-6 py-8 lg:p-8 text-main-blue mb-6 mx-6 lg:mx-0 lg:w-3/5 shadow-md relative overflow-hidden">
            <div className="w-full lg:mr-20 flex flex-col">
                <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-2xl font-bold ">{title}</h3>
                </div>
                <div className="mt-2 lg:mt-6 font-semibold">{text}</div>
                <div className="text-white mt-4 lg:mt-0 lg:self-end">
                    <ButtonPrimary onClick={toContacts} type="button-orange">
                        Интересно
                    </ButtonPrimary>
                </div>
            </div>
            <div className="hidden lg:block h-full w-20 bg-main-blue absolute top-0 right-0"></div>
        </div>
    );
};

export default function Job({ response }: any) {

    return (
        <div className="bg-main-gray">
            <Head>
                <title>Вакансии</title>
            </Head>
            <BreadCrumbs
                props={{
                    root: { path: "/specialists/job", title: "Вакансии" },
                }}
            />
            <div className="h-8 bg-main-blue w-full rounded-b-2xl text-main-blue"></div>
            <div className="flex justify-center mt-10">
                <div className="lg:w-3/5">
                    <h2 className="text-main-blue">Работа в зоопарке</h2>
                </div>
            </div>
            <div className="flex flex-col items-center mt-6 lg:mt-10">
                {response.map(({ title, description,publish } :any, key: number) => {
                    if (publish) {
                        return (
                            <Item key={key} title={title} text={description} />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params }: any) => {
    let response = null;

    const { data } = await axios.get(`/jobs`);

    response = data.jobs;

    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: { response },
    };
};
