import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IFeedback } from "types/feedback";
import { IPagination } from "types/table";

interface IInitialState {
    feedback: IFeedback | null;
    feedbacks: Array<IFeedback> | null;
    isLoading: boolean;
    pagination: IPagination | null;
}

const initialState: IInitialState = {
    feedback: null,
    feedbacks: null,
    isLoading: false,
    pagination: { start: 0, current: 0, count: 0 },
};

export const getFeedbackByPagination = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("feedback/getFeedbackByPagination", async (offset, { rejectWithValue }) => {
    const { data } = await axios.get("/feedback-pagination/" + offset);
    return data;
});

export const deleteFeedback = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("feedback/deleteFeedback", async (id, { dispatch }) => {
    const { data } = await axios({
        method: "delete",
        url: "/feedback/",
        data: { entity: id },
    });

    if (data) {
        dispatch(feedbackSlice.actions.delete(id));
    }

    return data;
});

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        delete: (state, action) => {
            state.feedbacks = state.feedbacks!.filter(
                (feedback) => feedback.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getFeedbackByPagination.fulfilled,
            (state, { payload }) => {
                state.feedbacks = payload.feedbacks;
                state.pagination = payload.pagination;
            }
        );
    },
});
