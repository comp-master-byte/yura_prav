import { toJS } from "mobx";
import { useContext, useEffect } from "react"
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

    console.log(toJS(lawyer.lawyerHelp));

    return {
        store,
        lawyer
    }
}