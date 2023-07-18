import axios from "axios";
import {useTelegram} from "../Hooks/useTelegram";


const $api = axios.create({
    baseURL:`${process.env.REACT_APP_API_URL}`
});

$api.interceptors.response.use((config) => {
    return config;
},(async error => {
    const {showTelegramAlert} = useTelegram()
    const originalRequest = error.config;

    if (error.response?.status === 401) {
        showTelegramAlert("Ошибка авторизации");
        console.log("Ошибка авторизации");
    }
    if(error.response?.status === 500){
        console.log("Произошла непредвиденная ошибка, попробуйте позже");
        showTelegramAlert("Произошла непредвиденная ошибка, попробуйте позже");
    }
    if(error.response?.status === 420){
        return error.response
    }
}));

export {
    $api
};

