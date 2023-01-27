import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { privateRoutes, publicRoutes } from "./index";
import {observer} from "mobx-react-lite"

const AppRouter = ({store}) => { 
    return (
        store.isAuth 
        ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.component} />
                )}
                <Route path="*" element={<Navigate to="/lk/account" />} />
            </Routes>
        :
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    {publicRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={route.component} />    
                    )}
                </Route>
                <Route path="*" element={<Navigate to="/login" replace />} />  replace - чтобы почистить историю браузера
            </Routes>
    )
}

export default observer(AppRouter);