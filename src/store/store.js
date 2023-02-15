import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import {toast} from "react-toastify";
import UserService from "../services/UserService";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;
    isAccountPopupVisible = false;
    registerBtnText = "Зарегистрироваться";
    loginBtnText = "Войти";

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

    setLoginBtnText(text) {
        this.loginBtnText = text;
    }

    checkAuth() {
        if(localStorage.getItem('token')) {
            this.setAuth(true);
        } else {
            this.setAuth(false);
        }
    }

    checkUser() {
        const userData = localStorage.getItem('user');
        const parsedUser = JSON.parse(userData);
        if(userData) {
            this.setUser(parsedUser);
        } else {
            this.getUserInformation();
        }
    }

    accountPopupToVisible(bool) {
        this.isAccountPopupVisible = bool;
    }

    accountPopupToHide(bool) {
        this.isAccountPopupVisible = bool;
    }

    async getUserInformation() {
        try {
            const user = await UserService.getUser();
            const toStringUser = JSON.stringify(user);
            localStorage.setItem('user', toStringUser);
            this.setUser(user);
        } catch(e) {
            console.log(e.response.data);
        }
    }

    async login(loginData) {
        try {
            this.setIsLoading(true);
            this.setLoginBtnText('Выполняем вход...');
            const response = await AuthService.login(loginData);
            localStorage.setItem('token', response.data.auth_token);
            this.setAuth(true);
            toast('Вы успешно авторизовались!', {
                type: 'success',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 2000
            })
        } catch(e) {
            toast(e.response.data.non_field_errors[0], {
                type: 'error',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 2000
            })
        } finally {
            this.setIsLoading(false);
            this.setLoginBtnText('Войти');
        }
    }

    async registration(registrationData, callback) {
        try {
            this.setIsLoading(true);
            this.setRegisterBtnText('Загрузка...');
            const response = await AuthService.registration(registrationData);
            toast('Вы успешно зарегистрированны!', {
                type: 'success',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 2000
            })
            this.setUser(response.data);
            this.setRegisterBtnText('Переносим на вход...');
            await callback();
        } catch(e) {
            const errorKey = Object.keys(e.response.data)[0];
            e.response.data[errorKey].forEach(error => {
                toast(error, {
                    type: 'error',
                    position: 'top-right',
                    pauseOnHover: true,
                    autoClose: 5000
                })
            })
            this.setRegisterBtnText('Зарегистрироваться');
            this.setIsLoading(false);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
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