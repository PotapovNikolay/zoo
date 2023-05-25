import { dispatcher } from "utils";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import { IPagination } from "types/table";
import { CheckBox } from "./CheckBox";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "components/base";
import useSWRMutation from "swr/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

interface TableRowProps<T extends newObj> {
    entity: T;
    open: (id: number) => void;
    deleteEntity: (id: number) => void;
}

function TableRow<T extends newObj>({
    entity,
    open,
    deleteEntity,
}: TableRowProps<T>): JSX.Element {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <tr
            onClick={() => {
                !isHover ? open(entity.id!) : null;
            }}
            className="bg-white border-b dark:bg-gray-800 cursor-pointer dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
            <td className="w-4 p-4">
                <CheckBox />
            </td>

            {Object.entries(entity).map(([key, value], index) => {
                if (
                    typeof value === "boolean" ||
                    key === "offer" ||
                    key === "look"
                ) {
                    return (
                        <td key={index} className="px-6 py-4">
                            <CheckBox check={value ? value : false} />
                        </td>
                    );
                }

                if (key === "id") {
                    return (
                        <th
                            key={index}
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {value}
                        </th>
                    );
                }
                if (
                    key !== "classId" &&
                    key !== "animal_images" &&
                    key !== "updatedAt" &&
                    key !== "createdAt"
                ) {
                    return (
                        <td key={index} className="px-6 py-4">
                            {typeof value === "string"
                                ? value.slice(0, 20)
                                : value}
                        </td>
                    );
                }
            })}

            <td className="px-6 py-4">
                <div
                    onMouseOver={() => {
                        setIsHover(true);
                    }}
                    onMouseOut={() => {
                        setIsHover(false);
                    }}
                    onClick={() => {
                        deleteEntity(entity.id!);
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 "
                >
                    <Button type="red" label="Удалить" />
                </div>
            </td>
        </tr>
    );
}

interface newObj extends Object {
    id?: number;
}

interface TableProps<T extends newObj> {
    pagination: IPagination | null;
    entities: Array<T> | null;
    columns: Array<{ title: string }>;
    getCurrentPageOfTable: (pag: number) => void;
    deleteEntity: (id: number) => void;
}

export const Table = function <T extends newObj>({
    pagination,
    entities,
    columns,
    getCurrentPageOfTable,
    deleteEntity,
}: TableProps<T>) {
    const navigate = useNavigate();
    const location = useLocation();

    function toDetail(id: number) {
        navigate(location.pathname + "/" + id);
    }

    function toCreate() {
        navigate(location.pathname + "/new");
    }

    return (
        <div className="lg:mx-6 py-10">
            <ToastContainer />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <div className="flex space-x-4 items-end ">
                    {/* <Search /> */}
                    <div className="pb-4 ">
                        <Button label="Создать" submit={toCreate} />
                    </div>
                </div>

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <CheckBox />
                            </th>
                            {columns.map((column, key) => {
                                return (
                                    <th
                                        key={key}
                                        scope="col"
                                        className="px-6 py-3"
                                    >
                                        {column.title}
                                    </th>
                                );
                            })}
                            <th scope="col" className="px-6 py-3">
                                Действие
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities?.map((entity: T, key: number) => {
                            return (
                                <TableRow
                                    deleteEntity={deleteEntity}
                                    open={toDetail}
                                    entity={entity}
                                    key={key}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination
                onClick={getCurrentPageOfTable}
                pagination={pagination}
            />
        </div>
    );
};
