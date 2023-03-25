import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../index";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const toAccountPage = () => navigate("/personalAccount/account");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const onSubmit = (data) => {
    store.login(data);
    setTimeout(() => {
      toAccountPage();
    }, 1000);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    store,
    togglePasswordVisibility,
    isPasswordVisible,
  };
};
