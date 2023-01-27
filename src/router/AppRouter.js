import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AuthLayout from "../components/AuthLayout/AuthLayout";

const AppRouter = () => {
    return (
        <Routes> 
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter