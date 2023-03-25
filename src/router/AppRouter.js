import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";
import AccountLayout from "../components/Layout/AccountLayout/AccountLayout";
import LoginPage from "../pages/auth/LoginPage/LoginPage";
import { privateRoutes, publicRoutes } from "./index";
import { useContext } from "react";
import { Context } from "..";

const AppRouter = () => {
  const { store } = useContext(Context);
  return store.isAuth ? (
    <Routes>
      {" "}
      {/*Тут только те роуты, где пользователь авторизован*/}
      <Route path="/personalAccount/" element={<AccountLayout />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route
        path="*"
        element={<Navigate to="/personalAccount/account/1" replace />}
      />{" "}
      replace - чтобы почистить историю браузера
    </Routes>
  ) : (
    <Routes>
      {" "}
      {/*Тут только те роуты, где пользователь еще не авторизован и лк ему недоступен*/}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default observer(AppRouter);
