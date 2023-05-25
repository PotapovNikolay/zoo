import { AppDispatch, useAppSelector } from "store";
import {
    deleteReview,
    getReviewsByPagination,
} from "store/slices/reviews/ReviewsSlice";
import { Table } from "components/table/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableColumns } from "./columns";

export const Reviews = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { reviews, pagination } = useAppSelector((state) => state.reviews);

    const location = useLocation();

    useEffect(() => {
        dispatch(getReviewsByPagination(pagination!.current));
    }, [dispatch, location]);

    function getCurrentPageOfTable(peg: number) {
        dispatch(getReviewsByPagination(peg));
    }

    function deleteEntity(id: number) {
        dispatch(deleteReview(id));
    }

    return (
        <div>
            <Table
                deleteEntity={deleteEntity}
                entities={reviews}
                pagination={pagination}
                columns={tableColumns}
                getCurrentPageOfTable={getCurrentPageOfTable}
            />
        </div>
    );
};
