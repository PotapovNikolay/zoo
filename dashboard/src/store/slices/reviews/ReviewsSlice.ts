import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IReview } from "types/review";
import { IPagination } from "types/table";

interface IInitialState {
    review: IReview | null;
    reviews: Array<IReview> | null;
    isLoading: boolean;
    pagination: IPagination | null;
}

const initialState: IInitialState = {
    review: null,
    reviews: null,
    isLoading: false,
    pagination: { start: 0, current: 0, count: 0 },
};

export const getReviewsByPagination = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("reviews/getReviewsByPagination", async (offset, { rejectWithValue }) => {
    const { data } = await axios.get("/reviews-pagination/" + offset);
    return data;
});

export const deleteReview = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("reviews/deleteReview", async (id, { dispatch }) => {
    const { data } = await axios({
        method: "delete",
        url: "/reviews/",
        data: { entity: id },
    });

    if (data) {
        dispatch(reviewsSlice.actions.delete(id));
    }

    return data;
});

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        delete: (state, action) => {
            state.reviews = state.reviews!.filter(
                (review) => review.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getReviewsByPagination.fulfilled,
            (state, { payload }) => {
                state.reviews = payload.reviews;
                state.pagination = payload.pagination;
            }
        );
    },
});
