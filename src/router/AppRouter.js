import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import {observer} from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import AccountPage from "../pages/AccountPage/AccountPage";

const AppRouter = () => {
    const {store} = useContext(Context);
    return (
        <Routes> 
            {!store.isAuth && <Route path="/" element={<Navigate to="/login" />} />}
            {store.isAuth && <Route path="/lk/account" element={<AccountPage />} />}
            <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Route>
        </Routes>
    )
}

export default observer(AppRouter)