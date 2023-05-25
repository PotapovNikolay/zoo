import { AppDispatch, useAppSelector } from "store";
import { deleteAnimal, getAnimalsByPagination } from "store/slices/animals/AnimalsSlice";
import { Table } from "components/table/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableColumns } from "./columns";

export const Animals = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { animals, pagination } = useAppSelector((state) => state.animals);

    const location = useLocation();

    useEffect(() => {
        dispatch(getAnimalsByPagination(pagination!.current));
    }, [dispatch, location]);

    function getCurrentPageOfTable(peg: number) {
        dispatch(getAnimalsByPagination(peg));
    }

    function deleteEntity(id: number) {
        dispatch(deleteAnimal(id));
    }

    return (
        <div>
            <Table
                deleteEntity={deleteEntity}
                entities={animals}
                pagination={pagination}
                columns={tableColumns}
                getCurrentPageOfTable={getCurrentPageOfTable}
            />
        </div>
    );
};
