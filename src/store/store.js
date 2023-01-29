import { makeAutoObservable, configure } from "mobx";
import AuthService from "../services/AuthService";
import {toast} from "react-toastify";
import UserService from "../services/UserService";

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

    checkAuth() {
        if(localStorage.getItem('token')) {
            this.setAuth(true);
        } else {
            this.setAuth(false);
        }
    }

    async getUserInformation() {
        try {
            const user = await UserService.getUser();
            this.setUser(user);
        } catch(e) {
            console.log(e.response.data);
        }
    }

    async login(loginData, callback) {
        try {
            const response = await AuthService.login(loginData);
            localStorage.setItem('token', response.data.auth_token);
            this.setAuth(true);
            callback();
        } catch(e) {
            console.log(e);
        }
    }

    async registration(registrationData, callback) {
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
            await callback();
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