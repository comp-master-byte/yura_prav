import AccountPage from "../pages/PersonalAccount/AccountPage/AccountPage";
import GenerateQuestionPage from "../pages/PersonalAccount/GenerateQuestionPage/GenerateQuestionPage";
import SignUpPage from "../pages/Auth/SignUpPage/SignUpPage";
import EditPage from "../pages/PersonalAccount/EditPage/EditPage";

export const privateRoutes = [
  { path: "account/:id", component: <AccountPage /> },
  { path: "generate-question", component: <GenerateQuestionPage /> },
  { path: "account/:id/edit", component: <EditPage /> },
];

export const publicRoutes = [{ path: "signup", component: <SignUpPage /> }];
