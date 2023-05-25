import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { animalsSlice } from "./slices/animals/AnimalsSlice";
import { actualsSlice } from "./slices/actuals/ActualsSlice";
import { reviewsSlice } from "./slices/reviews/ReviewsSlice";
import { jobsSlice } from "./slices/jobs/JobsSlice";
import { faqSlice } from "./slices/faq/FAQSlice";
import { feedbackSlice } from "./slices/feedback/FeedbackSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        animals: animalsSlice.reducer,
        actuals: actualsSlice.reducer,
        reviews: reviewsSlice.reducer,
        jobs: jobsSlice.reducer,
        faq:faqSlice.reducer,
        feedback:feedbackSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
