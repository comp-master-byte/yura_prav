import { useContext } from "react"
import { useEffect } from "react"
import { Context } from "../.."

export const useAccountPage = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        store.getUserInformation()
    }, [])

    return {
        store
    }
}