import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { privateRoutes, publicRoutes } from "./index";
import {observer} from "mobx-react-lite"
import LoginPage from "../pages/LoginPage/LoginPage";
import AccountLayout from "../components/AccountLayout/AccountLayout";

const AppRouter = ({store}) => { 
    return (
        store.isAuth 
        ?
            <Routes> {/*Тут только те роуты, где пользователь авторизован*/}
                <Route path='/lk/' element={<AccountLayout />}>
                    {privateRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={route.component} />
                    )}
                </Route>
                <Route path="*" element={<Navigate to="/lk/account" replace />} /> {/*  replace - чтобы почистить историю браузера */}
            </Routes>
        :
            <Routes> {/*Тут только те роуты, где пользователь еще не авторизован и лк ему недоступен*/}
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    {publicRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={route.component} />    
                    )}
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} /> {/*  replace - чтобы почистить историю браузера */}
            </Routes>
    )
}

export default observer(AppRouter);