import { AppDispatch, useAppSelector } from "store";
import {
    deleteJob,
    getJobsByPagination,
} from "store/slices/jobs/JobsSlice";
import { Table } from "components/table/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableColumns } from "./columns";

export const Jobs = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { jobs, pagination } = useAppSelector((state) => state.jobs);

    const location = useLocation();

    useEffect(() => {
        dispatch(getJobsByPagination(pagination!.current));
    }, [dispatch, location]);

    function getCurrentPageOfTable(peg: number) {
        dispatch(getJobsByPagination(peg));
    }

    function deleteEntity(id: number) {
        dispatch(deleteJob(id));
    }

    return (
        <div>
            <Table
                deleteEntity={deleteEntity}
                entities={jobs}
                pagination={pagination}
                columns={tableColumns}
                getCurrentPageOfTable={getCurrentPageOfTable}
            />
        </div>
    );
};
