import AccountPage from "../pages/lk/AccountPage/AccountPage";
import GenerateQuestionPage from "../pages/lk/GenerateQuestionPage/GenerateQuestionPage";
import SignUpPage from "../pages/auth/SignUpPage/SignUpPage";

export const privateRoutes = [
    {path: 'account/:id', component: <AccountPage />},
    {path: 'generate-question', component: <GenerateQuestionPage />}
]

export const publicRoutes = [
    {path: 'signup', component: <SignUpPage />},
]