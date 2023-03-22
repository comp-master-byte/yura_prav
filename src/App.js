import React, { useEffect, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Context } from "./index";
import AppRouter from "./router/AppRouter";
import "./styles/main.scss";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <div>
      <ToastContainer />
      <AppRouter />
    </div>
  );
};

export default App;
