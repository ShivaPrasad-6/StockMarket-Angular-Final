import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ac2 } from 'src/app/LoC/ac2/ac2';
let UpdatecompanyComponent = class UpdatecompanyComponent {
    constructor(router, companyservice) {
        this.router = router;
        this.companyservice = companyservice;
        this.company = new Ac2();
        this.submitted = false;
        this.companyupdateform = new FormGroup({
            companyname: new FormControl('', [Validators.required]),
            ceoname: new FormControl('', [Validators.required]),
            turnover: new FormControl('', [Validators.required]),
            bod: new FormControl('', [Validators.required]),
            listedinse: new FormControl('', [Validators.required]),
            sector: new FormControl('', [Validators.required]),
            remarks: new FormControl('', [Validators.required]),
            stockcode: new FormControl('', [Validators.required])
        });
    }
    ngOnInit() {
        var companyname = window.localStorage.getItem("edit-companyname");
        this.companyservice.findOneInAll1(companyname)
            .subscribe(data => {
            this.company = data;
            this.companyupdateform.setValue(this.company);
        });
        this.submitted = false;
    }
    updateCompany(updateCompany) {
        this.company = new Ac2();
        this.company.companyname = this.Companyname.value;
        this.company.turnover = this.Turnover.value;
        this.company.ceoname = this.Ceoname.value;
        this.company.bod = this.Bod.value;
        this.company.listedinse = this.Listedinse.value;
        this.company.sector = this.Sector.value;
        this.company.remarks = this.Remarks.value;
        this.company.stockcode = this.Stockcode.value;
        this.submitted = true;
        this.update();
    }
    update() {
        this.companyservice.updateCompany(this.company, this.company.companyname)
            .subscribe(data => console.log(data), error => console.log(error));
        this.company = new Ac2();
        this.router.navigate(['ac2']);
    }
    get Companyname() {
        return this.companyupdateform.get('companyname');
    }
    get Turnover() {
        return this.companyupdateform.get('turnover');
    }
    get Ceoname() {
        return this.companyupdateform.get('ceoname');
    }
    get Bod() {
        return this.companyupdateform.get('bod');
    }
    get Listedinse() {
        return this.companyupdateform.get('listedinse');
    }
    get Sector() {
        return this.companyupdateform.get('sector');
    }
    get Remarks() {
        return this.companyupdateform.get('remarks');
    }
    get Stockcode() {
        return this.companyupdateform.get('stockcode');
    }
    updateCompanyForm() {
        this.submitted = false;
        this.companyupdateform.reset();
    }
};
UpdatecompanyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-updatecompany',
        templateUrl: './updatecompany.component.html',
        styleUrls: ['./updatecompany.component.css']
    })
], UpdatecompanyComponent);
export { UpdatecompanyComponent };
//# sourceMappingURL=updatecompany.component.js.map