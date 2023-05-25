import { fetcher, dispatcher, axios } from "utils";
import {
    Button,
    Input,
    TextArea,
    Preloader,
    Upload,
    Images,
    Select,
    CheckBox,
} from "components/base";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IFeedback } from "types/feedback";
import { useEffect, useState } from "react";
import { initial } from "./initial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FaqProps {}

export const Feedback: React.FC<FaqProps> = () => {
    const params = useParams();
    const navigate = useNavigate();

    let data: any = null;
    let isLoading = false;

    if (params.id) {
        const { data: res, isLoading: load } = useSWR(
            "/feedback/" + params.id,
            fetcher
        );
        data = res;
        isLoading = load;
    }

    const { trigger, error } = useSWRMutation("/feedback", dispatcher);
    const [entity, setEntity] = useState<IFeedback>(initial);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const update = Object.hasOwn(params, "id");

    useEffect(() => {
        if (data?.success) {
            setEntity(data.feedback);
        }
    }, [data]);

    function setField(field: number | string | File | boolean, name: string) {
        // if (name === "animal_images") {
        //     upload(File);
        // }

        setEntity({ ...entity, [name]: field });
    }

    async function updateORcreate() {
        const data = update
            ? await trigger({ entity: entity, method: "patch" })
            : await trigger({ entity: entity, method: "post" });

        if (data) {
            toast(data.message);
            navigate(-1);
        }
    }

    if (isLoading) {
        return <Preloader />;
    }

    if (!entity) {
        return <Preloader />;
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <ToastContainer />
            <div className="py-8 px-16 mx-auto  lg:py-16 ">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Обращение
                </h2>

                <div className="grid gap-4 sm:grid-cols-8 sm:gap-6">
                    <div className="sm:col-span-2">
                        <Input
                            label="Имя"
                            name="name"
                            value={entity.name!}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Input
                            label="Телефон"
                            name="phone"
                            value={entity.phone!}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Input
                            label="Почта"
                            name="email"
                            value={entity.email!}
                            setField={setField}
                        />
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-8 sm:gap-6 mt-6">
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Текст"
                            name="text"
                            value={entity.text}
                            setField={setField}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
