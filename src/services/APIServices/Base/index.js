import axios from 'axios';
import moment from 'moment';

import Storage from '../../StorageServices';
import url from '../config';

import { decode } from 'jsonwebtoken';

export default class Base {

    constructor(path) {
        this.axios = axios;
        this.moment = moment;
        this.url = url;
        this.path = path;
        this.storage = new Storage();
        this.headers = null;
    }

    setHeaders() {
        this.config = { headers: { authorization: this.storage.getToken() } };
    }

    checkTokenExpire() {
        if (!this.storage.getToken()) return true;
        const decodeToken = decode(this.storage.getToken());
        const expDate = new Date(decodeToken.exp * 1000);
        return moment().isAfter(moment(expDate));
    }

    async get() {
        try {
            this.setHeaders();
            const res = await this.axios.get(`${this.url}/${this.path}`, this.config);
            return res.data.result;
        } catch (error) {
            if (error && error.response && error.response.data && error.response.data.result && error.response.data.result.name === 'TokenExpiredError') {
                this.storage.removeStorage();
                window.location.reload();
                return;
            }
            throw error;
        }
    }

    async getById(id) {
        try {
            this.setHeaders();
            const res = await this.axios.get(`${this.url}/${this.path}/${id}`, this.config);
            return res.data.result;
        } catch (error) {
            if (error && error.response && error.response.data && error.response.data.result && error.response.data.result.name === 'TokenExpiredError') {
                this.storage.removeStorage();
                window.location.reload();
                return;
            }
            throw error;
        }
    }

    async create(data) {
        try {
            this.setHeaders();
            const res = await this.axios.post(`${this.url}/${this.path}`, data, this.config);
            return res.data.result;
        } catch (error) {
            if (error && error.response && error.response.data && error.response.data.result && error.response.data.result.name === 'TokenExpiredError') {
                this.storage.removeStorage();
                window.location.reload();
                return;
            }
            throw error;
        }
    }

    async update(id, data) {
        try {
            this.setHeaders();
            const res = await this.axios.patch(`${this.url}/${this.path}/${id}`, data, this.config);
            return res.data.result;
        } catch (error) {
            if (error && error.response && error.response.data && error.response.data.result && error.response.data.result.name === 'TokenExpiredError') {
                this.storage.removeStorage();
                window.location.reload();
                return;
            }
            throw error;
        }
    }

    async remove(id) {
        try {
            this.setHeaders();
            const res = await this.axios.delete(`${this.url}/${this.path}/${id}`, this.config);
            return res.data.result;
        } catch (error) {
            if (error && error.response && error.response.data && error.response.data.result && error.response.data.result.name === 'TokenExpiredError') {
                this.storage.removeStorage();
                window.location.reload();
                return;
            }
            throw error;
        }
    }
}