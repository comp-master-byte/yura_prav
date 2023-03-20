import AccountPage from "../pages/lk/AccountPage/AccountPage";
import GenerateQuestionPage from "../pages/lk/GenerateQuestionPage/GenerateQuestionPage";
import SignUpPage from "../pages/auth/SignUpPage/SignUpPage";
import EditPage from "../pages/lk/EditPage/EditPage";

export const privateRoutes = [
  { path: "account/:id", component: <AccountPage /> },
  { path: "generate-question", component: <GenerateQuestionPage /> },
  { path: "account/:id/edit", component: <EditPage /> },
];

export const publicRoutes = [{ path: "signup", component: <SignUpPage /> }];
