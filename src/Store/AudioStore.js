import {action, makeAutoObservable} from "mobx";
import {$api} from "../Http";

class AudioStore {
    isLoading = true
    songs = []


    constructor() {
        makeAutoObservable(this)
    }

    async fetch() {
        const params = new URLSearchParams([['token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9']]);
        await $api.get(`${process.env.REACT_APP_API_URL}/get_audio`, { params }).then(({data}) => {
            this.isLoading = false
            this.songs = data.data;
        });

    }
}

export default new AudioStore();