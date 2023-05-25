import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IType } from "types/auth";

const initialState: IType = {
    user:false,
    success: false,
    message: null,
};

export const getMe = createAsyncThunk("auth/getMe", async () => {
    const { data } = await axios.get("/me");
    return data;
});

export const login = createAsyncThunk(
    "auth/loginUser",
    async ({ password, login }: { password: string; login: string }) => {
        const { data } = await axios.post("/login", {
            password,
            login,
        });

        if (data.token) {
            window.localStorage.setItem("token", data.token);
        }

        return data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMe.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.message = payload.message;
            state.success = payload.success;
        });

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.user
            state.message = payload.message;
            state.success = payload.success
        });
    },
});

export const checkIsAuth = (state: IType) => state.user;


// export default authSlice.reducer
