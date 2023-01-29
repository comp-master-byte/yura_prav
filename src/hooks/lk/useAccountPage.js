import { useContext, useEffect } from "react"
import { Context } from "../.."

export const useAccountPage = () => {
    const {store, lawyer} = useContext(Context);

    const getAllNecessaryData = async () => {
        await lawyer.getSelectedLawyerHelp();
        store.checkUser();
    }

    useEffect(() => {
        getAllNecessaryData();
    }, [])

    return {
        store,
        lawyer
    }
}