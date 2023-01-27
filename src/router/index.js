import AccountPage from "../pages/AccountPage/AccountPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";


export const privateRoutes = [
    {path: '/lk/account', component: <AccountPage />},
]

export const publicRoutes = [
    {path: 'login', component: <LoginPage />},
    {path: 'signup', component: <SignUpPage />}
]