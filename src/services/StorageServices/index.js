export default class Storage {
    constructor() {

    }

    isToken() {
        return this.getToken() ? true : false;
    }

    saveToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }

    saveCurrentUser(user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
    }

    getToken() {
        return JSON.parse(localStorage.getItem("token"));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("currentUser"));
    }

    removeStorage() {
        localStorage.clear();
    }
}