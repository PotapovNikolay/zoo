import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IJob } from "types/job";
import { IPagination } from "types/table";

interface IInitialState {
    job: IJob | null;
    jobs: Array<IJob> | null;
    isLoading: boolean;
    pagination: IPagination | null;
}

const initialState: IInitialState = {
    job: null,
    jobs: null,
    isLoading: false,
    pagination: { start: 0, current: 0, count: 0 },
};

export const getJobsByPagination = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("jobs/getJobsByPagination", async (offset, { rejectWithValue }) => {
    const { data } = await axios.get("/jobs-pagination/" + offset);
    return data;
});

export const deleteJob = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("jobs/deleteJob", async (id, { dispatch }) => {
    const { data } = await axios({
        method: "delete",
        url: "/jobs/",
        data: { entity: id },
    });

    if (data) {
        dispatch(jobsSlice.actions.delete(id));
    }

    return data;
});

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        delete: (state, action) => {
            state.jobs = state.jobs!.filter(
                (job) => job.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getJobsByPagination.fulfilled,
            (state, { payload }) => {
                state.jobs = payload.jobs;
                state.pagination = payload.pagination;
            }
        );
    },
});
