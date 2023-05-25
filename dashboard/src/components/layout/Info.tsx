import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";

interface InfoProps {
    closeInfo: (show: boolean) => void;
}

export const Info: React.FC<InfoProps> = ({ closeInfo }) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div>
            <div className="fixed inset-0 w-full h-full z-[70] bg-black opacity-50"></div>
            <div
                onClick={() => {
                    !hover && closeInfo(false);
                }}
                className="fixed inset-0 w-full h-full z-[80] flex flex-col  justify-center items-center "
            >
                <div
                    onMouseEnter={() => {
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        setHover(false);
                    }}
                    className="w-8/12  "
                >
                    <div>
                        <Splide aria-label="My Favorite Images">
                            <SplideSlide>
                                <div>
                                    <img
                                        src={"/info/IMG_6864.png"}
                                        className="object-cover w-full h-full rounded-xl"
                                        alt="Image 1"
                                    />
                                    <div className="flex justify-center bg-white rounded-xl mt-4 p-6">
                                        <div>
                                            В левой части экрана вы видите
                                            панель управления. Она разделена на
                                            три блока: Выбор данных, Справка и
                                            Тема. В блоке Выбор данных вы
                                            найдете все необходимые данные для
                                            изменения. В блоке Справка вы
                                            находитесь сейчас, здесь вы найдете
                                            всю информацию, необходимую для
                                            работы с административной панелью. В
                                            блоке Тема вы можете изменить тему
                                            со светлой на темную.
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div>
                                    <img
                                        src={"/info/IMG_6863.png"}
                                        className="object-cover w-full h-full rounded-xl"
                                        alt="Image 1"
                                    />
                                    <div className="flex justify-center bg-white rounded-xl mt-4 p-6">
                                        <div>
                                            При выборе данных вы увидите таблицу
                                            с данными, относящимися к выбранной
                                            категории информации. Вверху таблицы
                                            представлены заголовки
                                            столбцов.Каждая строка таблицы
                                            является ее экземпляром.
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div>
                                    <img
                                        src={"/info/IMG_6862.png"}
                                        className="object-cover w-full h-full rounded-xl"
                                        alt="Image 1"
                                    />
                                    <div className="flex justify-center bg-white rounded-xl mt-4 p-6">
                                        <div>
                                            Для добавления нового экземпляра
                                            достаточно нажать кнопку «Создать»
                                            над таблицей. Для удаления
                                            экземпляра достаточно нажать конку
                                            «Удалить» с правой стороны, после
                                            чего экземпляр исчезнет со страницы
                                            и будет удален и базы данных. Для
                                            редактирования данных нажмите на на
                                            необходимую строку таблицы.
                                            Одновременно на странице
                                            отображается не более 10 строк. Для
                                            перехода к следующим строкам
                                            воспользуйтесь пагинацией,
                                            расположенной под таблицей.
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div>
                                    <img
                                        src={"/info/IMG_6861.png"}
                                        className="object-cover w-full h-full rounded-xl"
                                        alt="Image 1"
                                    />
                                    <div className="flex justify-center bg-white rounded-xl mt-4 p-6">
                                        <div>
                                            Создание и редактирование данных
                                            аналогичны. Вам необходимо заполнить
                                            поля с информацией и нажать кнопку
                                            сохранения внизу страницы.
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div>
                                    <img
                                        src={"/info/IMG_6863.png"}
                                        className="object-cover w-full h-full rounded-xl"
                                        alt="Image 1"
                                    />
                                    <div className="flex justify-center bg-white rounded-xl mt-4 p-6">
                                        <div>
                                            Для помещения животного на карту
                                            зоопарка вам необходимо выбрать
                                            ячейку, выбрать животное из
                                            выпадающего списка в правой части
                                            экрана и нажать кнопку
                                            «Подтвердить». Если ячейка занята,
                                            освободить ее можно двойным кликом
                                            мыши или подтверждением действия
                                            после первого клика в правой части
                                            экрана.
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    );
};
