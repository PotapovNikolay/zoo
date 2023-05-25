import Head from "next/head";
import { Preview, Specifications } from "@animals/classes";
import { BreadCrumbs } from "@components/layout";
import { ClassType } from "@types";
import mammalsPreview from "@images/animals/mammalsPreview.jpg";
import { axios } from "@fetcher";
import { Animals } from "@/src/pages/animals/classes/Animals";

interface axiosClassType {
    class: ClassType;
    success: boolean;
}

export const getStaticProps = async (context: any) => {
    let response = null;

    if (context.params) {
        const { data } = await axios.get(`/classes/${context.params.class}`);

        response = data.class;
    }

    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: { response },
    };
};

interface axiosClassesType {
    classes: ClassType[];
    success: boolean;
}

export const getStaticPaths = async () => {
    const { data } = await axios.get("/classes");

    return {
        paths: data.classes.map((item: ClassType) => {
            return { params: { class: item.engName } };
        }),
        fallback: false,
    };
};

export default function Mammals({ response }: any) {

    return (
        <div>
            <Head>
                <title>{response.name}</title>
            </Head>
            <BreadCrumbs
                props={{
                    root: { path: "/animals", title: "Животные" },
                    current: {
                        path: `/animals/${response.engName}`,
                        title: response.name,
                    },
                }}
            />
            <Preview
                title={response.name}
                image={mammalsPreview}
                description={response.description}
            />
            <Specifications
                features={response.class_features.map(
                    (features: any) => features.feature
                )}
            />
            <Animals animals={response.animals} />
        </div>
    );
}
