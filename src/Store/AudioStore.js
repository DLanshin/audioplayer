import {action, makeAutoObservable} from "mobx";
import {$api} from "../Http";

class AudioStore {
    isLoading = true
    songs = []


    constructor() {
        makeAutoObservable(this)
    }

    async fetch() {

        await $api.get(`${process.env.REACT_APP_API_URL}/get_audio?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`).then(({data}) => {
            this.isLoading = false
            this.songs = data.data;
        });

    }
}

export default new AudioStore();