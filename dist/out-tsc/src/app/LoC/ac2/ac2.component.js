import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let Ac2Component = class Ac2Component {
    constructor(router, ac2service) {
        this.router = router;
        this.ac2service = ac2service;
    }
    ngOnInit() {
        this.ac2service.getAllCompanies().subscribe(data => {
            this.companyList = data;
        });
    }
    deleteCompany(company) {
        this.ac2service.deleteCompany(company.companyname)
            .subscribe(data => {
            this.ac2service.getAllCompanies().subscribe(data => {
                this.companyList = data;
            });
        });
    }
    ;
    updateCompany(company) {
        window.localStorage.removeItem("edit-companyname");
        window.localStorage.setItem("edit-companyname", company.companyname.toString());
        this.router.navigate(['update-company']);
    }
    ;
};
Ac2Component = tslib_1.__decorate([
    Component({
        selector: 'app-ac2',
        templateUrl: './ac2.component.html',
        styleUrls: ['./ac2.component.css']
    })
], Ac2Component);
export { Ac2Component };
//# sourceMappingURL=ac2.component.js.map