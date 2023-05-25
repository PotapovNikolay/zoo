import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IActual } from "types/actual";
import { IPagination } from "types/table";

interface IInitialState {
    actual: IActual | null;
    actuals: Array<IActual> | null;
    isLoading: boolean;
    pagination: IPagination | null;
}

const initialState: IInitialState = {
    actual: null,
    actuals: null,
    isLoading: false,
    pagination: { start: 0, current: 0, count: 0 },
};

export const getActualsByPagination = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("actuals/getActualsByPagination", async (offset, { rejectWithValue }) => {
    const { data } = await axios.get("/actuals-pagination/" + offset);
    return data;
});

export const deleteActual = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("actuals/deleteActual", async (id, { dispatch }) => {
    const { data } = await axios({
        method: "delete",
        url: "/actuals/",
        data: { entity: id },
    });

    if (data) {
        dispatch(actualsSlice.actions.delete(id));
    }

    return data;
});

export const actualsSlice = createSlice({
    name: "actuals",
    initialState,
    reducers: {
        delete: (state, action) => {
            state.actuals = state.actuals!.filter(
                (actual) => actual.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getActualsByPagination.fulfilled,
            (state, { payload }) => {
                state.actuals = payload.actuals;
                state.pagination = payload.pagination;
            }
        );
    },
});
