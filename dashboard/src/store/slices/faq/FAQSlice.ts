import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IFAQ } from "types/faq";
import { IPagination } from "types/table";

interface IInitialState {
    faq: IFAQ | null;
    faqs: Array<IFAQ> | null;
    isLoading: boolean;
    pagination: IPagination | null;
}

const initialState: IInitialState = {
    faq: null,
    faqs: null,
    isLoading: false,
    pagination: { start: 0, current: 0, count: 0 },
};

export const getFaqByPagination = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("faq/getFaqByPagination", async (offset, { rejectWithValue }) => {
    const { data } = await axios.get("/faq-pagination/" + offset);
    return data;
});

export const deleteFaq = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("faq/deleteFaq", async (id, { dispatch }) => {
    const { data } = await axios({
        method: "delete",
        url: "/faq/",
        data: { entity: id },
    });

    if (data) {
        dispatch(faqSlice.actions.delete(id));
    }

    return data;
});

export const faqSlice = createSlice({
    name: "faq",
    initialState,
    reducers: {
        delete: (state, action) => {
            state.faqs = state.faqs!.filter(
                (faq) => faq.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getFaqByPagination.fulfilled,
            (state, { payload }) => {
                state.faqs = payload.faqs;
                state.pagination = payload.pagination;
            }
        );
    },
});
