import { useContext } from "react"
import { useEffect } from "react"
import { Context } from "../.."
import { toJS } from 'mobx';

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