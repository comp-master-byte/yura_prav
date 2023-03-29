import { useContext, useEffect } from "react";
import { Context } from "../..";

export const useAccountLayout = () => {
  const { store } = useContext(Context);

  const logoutFromAccount = () => store.logout();

  useEffect(() => {
    store.checkUser();
  }, []);

  return {
    logoutFromAccount,
    store,
  };
};
