import { AppDispatch, useAppSelector } from "store";
import {
    deleteFeedback,
    getFeedbackByPagination,
} from "store/slices/feedback/FeedbackSlice";
import { Table } from "components/table/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableColumns } from "./columns";

export const Feedbacks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { feedbacks, pagination } = useAppSelector((state) => state.feedback);

    const location = useLocation();

    useEffect(() => {
        dispatch(getFeedbackByPagination(pagination!.current));
    }, [dispatch, location]);

    function getCurrentPageOfTable(peg: number) {
        dispatch(getFeedbackByPagination(peg));
    }

    function deleteEntity(id: number) {
        dispatch(deleteFeedback(id));
    }

    return (
        <div>
            <Table
                deleteEntity={deleteEntity}
                entities={feedbacks}
                pagination={pagination}
                columns={tableColumns}
                getCurrentPageOfTable={getCurrentPageOfTable}
            />
        </div>
    );
};
