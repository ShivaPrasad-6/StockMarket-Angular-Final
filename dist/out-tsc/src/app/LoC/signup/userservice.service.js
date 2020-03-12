import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserserviceService = class UserserviceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8096/UserPortal/';
    }
    getAllUsers() {
        return this.http.get(`${this.baseUrl}` + 'getAllUsers');
    }
    saveUser(username) {
        return this.http.post(`${this.baseUrl}` + 'saveUser', username);
    }
    deleteUser(username) {
        return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);
    }
    findOneInAll6(username) {
        return this.http.get(`${this.baseUrl}/findOneInAll6/${username}`);
    }
    updateUser(username, value) {
        return this.http.put(`${this.baseUrl}` + 'updateUser/' + value, username);
    }
};
UserserviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserserviceService);
export { UserserviceService };
//# sourceMappingURL=userservice.service.js.map