import { AppDispatch, useAppSelector } from "store";
import {
    deleteFaq,
    getFaqByPagination,
} from "store/slices/faq/FAQSlice";
import { Table } from "components/table/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableColumns } from "./columns";

export const Faqs = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { faqs, pagination } = useAppSelector((state) => state.faq);

    const location = useLocation();

    useEffect(() => {
        dispatch(getFaqByPagination(pagination!.current));
    }, [dispatch, location]);

    function getCurrentPageOfTable(peg: number) {
        dispatch(getFaqByPagination(peg));
    }

    function deleteEntity(id: number) {
        dispatch(deleteFaq(id));
    }

    return (
        <div>
            <Table
                deleteEntity={deleteEntity}
                entities={faqs}
                pagination={pagination}
                columns={tableColumns}
                getCurrentPageOfTable={getCurrentPageOfTable}
            />
        </div>
    );
};
