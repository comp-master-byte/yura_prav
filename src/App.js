import React, {useEffect, useContext} from "react";
import { Context } from ".";
import AppRouter from "./router/AppRouter";
import "./styles/main.scss";

const App = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        store.checkAuth();
    }, [])
    
    return (
        <div>
            <AppRouter />
        </div>
    )
}

export default App;