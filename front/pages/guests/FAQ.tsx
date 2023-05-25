import { BreadCrumbs } from "@/src/components/layout";
import { Accordion } from "@/src/pages/guests/faq";
import { AddFaq } from "@/src/pages/guests/faq/AddFaq";
import { axios } from "@/src/utils/fetcher";
import Head from "next/head";

// const faq = [
//     {
//         q: "Каких животные можно увидеть в вашем зоопарке?",
//         a: "В нашем зоопарке вы можете увидеть различных животных, таких как львы, тигры, слоны, жирафы, обезьяны, пингвины, змеи, крокодилы и многие другие. Мы постоянно работаем над расширением нашей коллекции животных и стремимся предоставить нашим посетителям максимально интересный и разнообразный опыт.",
//     },
//     {
//         q: " Где находится этот зоопарк",
//         a: "Местоположение зоопарка можно найти на его официальном сайте или в Интернете.",
//     },
//     {
//         q: "Какие услуги предоставляет зоопарк?",
//         a: "Каждый зоопарк имеет свой набор услуг, но, как правило, там можно найти кафе и рестораны, магазины сувениров, а также учебные программы и экскурсии.",
//     },
//     {
//         q: "Какие меры принимает зоопарк для защиты животных?",
//         a: "Зоопарки обычно работают в тесном сотрудничестве с научными организациями и правительственными учреждениями, чтобы гарантировать безопасность и благополучие животных.",
//     },
//     {
//         q: "Какие возможности есть для посетителей с ограниченными возможностями?",
//         a: "Многие зоопарки предоставляют специальные услуги и удобства для посетителей с ограниченными возможностями, такие как инвалидные коляски и аудиогиды.",
//     },
//     {
//         q: "Какие меры принимает зоопарк для сохранения окружающей среды?",
//         a: "Многие зоопарки работают над улучшением своих экологических практик, таких как переработка отходов, снижение энергопотребления и использование экологически чистых материалов.",
//     },
// ];

export async function getStaticProps() {
    const {
        data: { faqs },
    } = await axios.get("/faqs");

    if (!faqs) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            faqs: faqs,
        },
    };
}

export default function FAQ({ faqs }: any) {
    return (
        <div className="bg-main-gray">
            <Head>
                <title>Вопрос-ответ</title>
            </Head>
            <BreadCrumbs
                props={{
                    root: { path: "/guests/FAQ", title: "Вопрос-ответ" },
                }}
            />
            <div className="h-8 bg-main-blue w-full rounded-b-2xl text-main-blue"></div>
            <div className="flex justify-center mt-10">
                <div className="lg:w-3/5 ">
                    <h2 className="text-main-blue">Вопросы и ответы</h2>
                </div>
            </div>
            <div className="flex flex-col items-center mx-6 lg:mx-0 mt-6 mlg:t-10">
                {faqs.map(({ question, answer, publish }: any, key: number) => {
                    if (publish) {
                        return <Accordion key={key} q={question} a={answer} />;
                    }
                })}
            </div>
            <AddFaq/>
        </div>
    );
}
