import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IAnimal } from "types/animal";
import { IPagination } from "types/table";

interface IInitialState {
    animal: IAnimal | null;
    animals: Array<IAnimal> | null;
    isLoading: boolean;
    pagination: IPagination | null;
}

const initialState: IInitialState = {
    animal: null,
    animals: null,
    isLoading: false,
    pagination: { start: 0, current: 0, count: 0 },
};

export const getAnimalsByPagination = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("animals/getAnimalsByPagination", async (offset, { rejectWithValue }) => {
    const { data } = await axios.get("/animals-pagination/" + offset);
    return data;
});

export const deleteAnimal = createAsyncThunk<
    IInitialState,
    number,
    { rejectValue: string }
>("animals/deleteAnimal", async (id, { dispatch }) => {
    const { data } = await axios({
        method: "delete",
        url: "/animals/",
        data: { entity: id },
    });

    if (data) {
        dispatch(animalsSlice.actions.delete(id))
    }

    return data;
});

export const animalsSlice = createSlice({
    name: "animals",
    initialState,
    reducers: {
        delete:(state, action)=>{
            state.animals = state.animals!.filter((animal)=>animal.id!==action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnimalsByPagination.fulfilled, (state, { payload }) => {
                state.animals = payload.animals;
                state.pagination = payload.pagination;
            })
            
    },
});
