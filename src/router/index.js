import AccountPage from "../pages/lk/AccountPage/AccountPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const privateRoutes = [
    {path: 'account', component: <AccountPage />},
]

export const publicRoutes = [
    {path: 'signup', component: <SignUpPage />},
]