import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let Ac2serviceService = class Ac2serviceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8096/Company/';
    }
    getAllCompanies() {
        return this.http.get(`${this.baseUrl}` + 'getAllCompanies');
    }
    saveCompany(companyname) {
        return this.http.post(`${this.baseUrl}` + 'saveCompany', companyname);
    }
    deleteCompany(companyname) {
        return this.http.delete(`${this.baseUrl}/deleteCompany/${companyname}`);
    }
    findOneInAll1(companyname) {
        return this.http.get(`${this.baseUrl}` + 'findOneInAll1/' + companyname);
    }
    updateCompany(companyname, value) {
        return this.http.put(`${this.baseUrl}` + 'updateCompany/' + value, companyname);
    }
};
Ac2serviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], Ac2serviceService);
export { Ac2serviceService };
//# sourceMappingURL=ac2service.service.js.map