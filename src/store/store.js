import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import {toast} from "react-toastify";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;
    registerBtnText = "Зарегестрироваться";

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setIsLoading(bool) {
        this.isLoading = bool;
    }

    setRegisterBtnText(text) {
        this.registerBtnText = text;
    }

    async login(loginData) {
        try {
            const response = await AuthService.login(loginData);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch(e) {
            toast(e.response.data.message, {
                type: 'error',
                position: 'top-right'
            })
        }
    }

    async registration(registrationData) {
        try {
            this.setIsLoading(true);
            this.setRegisterBtnText('Загрузка...');
            const response = await AuthService.registration(registrationData);
            toast('Вы успешно зарегестрированны!', {
                type: 'success',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 2000
            })
            this.setUser(response.data);
            this.setRegisterBtnText('Переносим на вход...');
        } catch(e) {
            toast('Произошла какая-то ошибка', {
                type: 'error',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 5000
            })
            this.setRegisterBtnText('Зарегестрироваться');
            this.setIsLoading(false);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch(e) {
            toast(e.response.data.message, {
                type: 'error',
                position: 'top-right'
            })
        }
    }
}