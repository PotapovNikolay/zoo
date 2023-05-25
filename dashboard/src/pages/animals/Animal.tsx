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
import { IAnimal } from "types/animal";
import { useEffect, useState } from "react";
import { initial } from "./initial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const classes = [
    { id: 1, title: "Млекопитающие" },
    { id: 2, title: "Птицы" },
    { id: 3, title: "Рептилии" },
];

interface AnimalProps {}

export const Animal: React.FC<AnimalProps> = () => {
    const params = useParams();
    const navigate = useNavigate();

    let data: any = null;
    let isLoading = false;

    if (params.id) {
        const { data: res, isLoading: load } = useSWR(
            "/animals/" + params.id,
            fetcher
        );
        data = res;
        isLoading = load;
    }

    const { trigger, error } = useSWRMutation("/animals", dispatcher);
    const [entity, setEntity] = useState<IAnimal>(initial);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const update = Object.hasOwn(params, "id");

    useEffect(() => {
        if (data?.success) {
            setEntity(data.animal);
        }
    }, [data]);

    function setField(field: number | string | File | boolean, name: string) {
        if (name === "animal_images") {
            upload(File);
        }

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

    async function upload(file: any) {
        // if (!entity.engName || !entity.engClass) {
        //     toast("нет наименования или класса на английском ");
        //     return;
        // }
        // const formData = new FormData();
        // formData.append("image", file);
        // const result = await axios.post("/upload", formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //         folder: `${entity.engClass}`,
        //         name: `${entity.engName}`,
        //     },
        // });
    }

    function toMap() {
        navigate("/animals/map");
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
                    {update ? "Редактировать" : "Создать"} животное
                </h2>
                <div className="grid gap-4 sm:grid-cols-8 sm:gap-6">
                    <div className="sm:col-span-2">
                        <Input
                            label="Наименование"
                            name="name"
                            value={entity.name}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Input
                            label="Наименование на английском"
                            name="engName"
                            value={entity.engName}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Input
                            label="Род"
                            name="genus"
                            value={entity.genus}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Input
                            label="Семейство"
                            name="family"
                            value={entity.family}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Input
                            label="Отряд"
                            name="squad"
                            value={entity.squad}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Select
                            options={classes}
                            label="Класс"
                            name="classId"
                            value={
                                classes.find(
                                    (clas) => clas.id === Number(entity.classId)
                                )!.id
                            }
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-2 flex space-x-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Ищем
                            </label>
                            <CheckBox
                                label="Ищем"
                                name="look"
                                value={entity.look ? entity.look : false}
                                setField={setField}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Предлагаем
                            </label>
                            <CheckBox
                                label="Предлагаем"
                                name="offer"
                                value={entity.offer ? entity.offer : false}
                                setField={setField}
                            />
                        </div>
                    </div>

                    {/* <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Животное на карте
                        </label>
                        <Button label={"перейти"} submit={toMap} />
                    </div> */}
                </div>
                <div className="grid gap-4 sm:grid-cols-8 sm:gap-6 mt-6">
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Питание"
                            name="food"
                            value={entity.food}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Среда обитания"
                            name="area"
                            value={entity.area}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Размер"
                            name="size"
                            value={entity.size}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Природоохранный статус"
                            name="status"
                            value={entity.status}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Продолжительность жизни"
                            name="lifeSpan"
                            value={entity.lifeSpan}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <TextArea
                            label="Лайфстайл"
                            name="lifeStyle"
                            value={entity.lifeStyle}
                            setField={setField}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <TextArea
                            label="С человеком"
                            name="human"
                            value={entity.human}
                            setField={setField}
                        />
                    </div>
                </div>
                <div className=" mt-6">
                    <div className="">
                        <Images
                            label="Изображение"
                            name="animal_images"
                            setField={setField}
                            images={entity.animal_images}
                        />
                        {/* <div>
                            <Upload
                                label="Изображение"
                                name="image"
                                value={entity.audioTrack}
                                upload={upload}
                            />
                        </div> */}
                    </div>
                </div>
                <div className="mt-4">
                    <Button
                        label={update ? "Редактировать" : "Создать"}
                        submit={updateORcreate}
                    />
                </div>
            </div>
        </div>
    );
};
