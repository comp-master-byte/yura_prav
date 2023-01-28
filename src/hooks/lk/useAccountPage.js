import { useContext } from "react"
import { useEffect } from "react"
import { Context } from "../.."

export const useAccountPage = () => {
    const {store, lawyer} = useContext(Context);

    const getAllNecessaryData = async () => {
        await store.getUserInformation();
        await lawyer.getSelectedLawyerHelp(1);
    }

    useEffect(() => {
        getAllNecessaryData();
    }, [])

    return {
        store,
        lawyer
    }
}