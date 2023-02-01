import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Context } from "../.."

export const useAccountLayout = () => {
    const {store, lawyer} = useContext(Context);

    const navigate = useNavigate();

    const to = () => navigate('/');

    const logoutFromAccount = () => {
        store.logout();
    }

    const getAllNecessaryData = () => {
        lawyer.getSelectedLawyerHelp();
        store.checkUser();
    }

    useEffect(() => {
        if(store.isAuth) {
            getAllNecessaryData();
        }
    }, [store.isAuth])

    return {
        logoutFromAccount,
        store
    }
}