import { AppDispatch, useAppSelector } from "store";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, login } from "store/slices/auth/AuthSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { message, success, user } = useAppSelector((state) => state.auth);

    const navigate = useNavigate();

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function enry() {
        if (!email.current && !password.current) return;

        dispatch(
            login({
                password: password.current!.value,
                login: email.current!.value,
            })
        );
    }

    useEffect(() => {

        toast(message);

        if (user) navigate("/");
    }, [message, success, navigate]);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 w-full">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Вход в аккаунт
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Логин
                                </label>
                                <input
                                    ref={email}
                                    // type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Пароль
                                </label>
                                <input
                                    ref={password}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <button
                                onClick={() => enry()}
                                type="submit"
                                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:blue-500 dark:hover:blue-600 dark:focus:ring-primary-800"
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
