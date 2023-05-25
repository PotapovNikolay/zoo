import { AppDispatch, useAppSelector } from "store";
import {
    deleteActual,
    getActualsByPagination,
} from "store/slices/actuals/ActualsSlice";
import { Table } from "components/table/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableColumns } from "./columns";

export const Actuals = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { actuals, pagination } = useAppSelector((state) => state.actuals);

    const location = useLocation();

    useEffect(() => {
        dispatch(getActualsByPagination(pagination!.current));
    }, [dispatch, location]);

    function getCurrentPageOfTable(peg: number) {
        dispatch(getActualsByPagination(peg));
    }

    function deleteEntity(id: number) {
        dispatch(deleteActual(id));
    }

    return (
        <div>
            <Table
                deleteEntity={deleteEntity}
                entities={actuals}
                pagination={pagination}
                columns={tableColumns}
                getCurrentPageOfTable={getCurrentPageOfTable}
            />
        </div>
    );
};
