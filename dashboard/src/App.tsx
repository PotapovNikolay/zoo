import { useEffect, useState } from "react";
import "./styles/global.css";
import { Layout } from "components/layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe, checkIsAuth } from "store/slices/auth/AuthSlice";
import { AppDispatch } from "store";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/main/Main";
import { Login } from "pages/auth/Login";
import { useNavigate } from "react-router-dom";
import { Animals, Animal,  } from "pages/animals";
import { Actuals, Actual } from "pages/actuals";
import { Reviews, Review } from "pages/reviews";
import {Job, Jobs} from "pages/job"
import { Faqs, Faq } from "pages/faq";
import { Feedback, Feedbacks } from "pages/feedback";
import { Map } from "pages/map";
import { Info } from "pages/info/Info";

function App() {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useSelector(checkIsAuth);

    useEffect(() => {
        dispatch(getMe());
        if (!isAuth) navigate("/login");
    }, [dispatch]);

    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/animals"}>
                    <Route index element={<Animals />} />
                    <Route path=":id" element={<Animal />} />
                    <Route path="new" element={<Animal />} />
                </Route>
                <Route path={"/actuals"}>
                    <Route index element={<Actuals />} />
                    <Route path=":id" element={<Actual />} />
                    <Route path="new" element={<Actual />} />
                </Route>
                <Route path={"/reviews"}>
                    <Route index element={<Reviews />} />
                    <Route path=":id" element={<Review />} />
                    <Route path="new" element={<Review />} />
                </Route>
                <Route path={"/job"}>
                    <Route index element={<Jobs />} />
                    <Route path=":id" element={<Job />} />
                    <Route path="new" element={<Job />} />
                </Route>
                <Route path={"/faq"}>
                    <Route index element={<Faqs />} />
                    <Route path=":id" element={<Faq />} />
                    <Route path="new" element={<Faq />} />
                </Route>
                <Route path={"/feedback"}>
                    <Route index element={<Feedbacks />} />
                    <Route path=":id" element={<Feedback />} />
                    <Route path="new" element={<Feedback />} />
                </Route>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/map"} element={<Map />} />
                {/* <Route path={"/info"} element={<Info />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Layout>
    );
}

export default App;
