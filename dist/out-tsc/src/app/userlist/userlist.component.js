import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserListComponent = class UserListComponent {
    constructor(router, userservice) {
        this.router = router;
        this.userservice = userservice;
    }
    ngOnInit() {
        this.userservice.getAllUsers().subscribe(data => {
            this.userList = data;
        });
    }
    deleteCompany(user) {
        this.userservice.deleteUser(user.username)
            .subscribe(data => {
            this.userservice.getAllUsers().subscribe(data => {
                this.userList = data;
            });
        });
    }
    ;
    updateUser(user) {
        window.localStorage.removeItem("edit-username");
        window.localStorage.setItem("edit-username", user.username.toString());
        this.router.navigate(['signup']);
    }
    ;
};
UserListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-userlist',
        templateUrl: './userlist.component.html',
        styleUrls: ['./userlist.component.css']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=userlist.component.js.map