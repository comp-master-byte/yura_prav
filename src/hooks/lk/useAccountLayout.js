import { useContext, useEffect } from "react"
import { Context } from "../.."

export const useAccountLayout = () => {
    const {store, lawyer} = useContext(Context);

    const logoutFromAccount = () => {
        store.logout();
    }

    const getAllNecessaryData = () => {
        lawyer.getSelectedLawyerHelp();
        store.checkUser();
    }

    useEffect(() => {
        getAllNecessaryData();
    }, [])

    return {
        logoutFromAccount,
        store
    }
}