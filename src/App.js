import React from "react";
import "./styles/main.scss";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
    return (
        <Routes> 
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default App;