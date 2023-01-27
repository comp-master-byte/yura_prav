import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import AccountPage from "../pages/AccountPage/AccountPage";

const AppRouter = () => {   
    return (
        <Routes> 
            <Route path="/lk/account" element={<AccountPage />} />
            <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="*" element={<Navigate to="/login" replace />} /> {/* replace - чтобы почистить историю браузера */}
            </Route>
        </Routes>
    )
}

export default AppRouter;