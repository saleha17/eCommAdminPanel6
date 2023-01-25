import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;

  public getAllCompanyData: any;
  public manageSelectedCompany: '';
  public selectedCompany: '';
  public items: any;
  public id: any;
  public arrowKeyLocation = -1;
  public contactNumber = '';
  public contactName = '';
  public companyName = '';
  public listOfActions: any = [];
  public listOfActionPermission: any = [
    { permissionName: 'Read' },
    { permissionName: 'Delete' },
  ];
  public listOfUsers: any = [];
  public flgBtn = '';
  public userData: any;
  public name = '';
  public heading = '';
  public webHookInOutUrl = '';
  public isOpen = false;
  public handleCompanyWebHook = '';
  public whichPage = 'company';

  public longitude: any;
  public latitude: any;
  public distance: any;
  public refCompanyId: any;
  public subdomain = '';
  public productType = '';
  public companyLogo = '';
  selectedDesignation = '';
  constructor() {}

  ngOnInit() {}
  async getRefCompanyId() {}
  setItems() {}
  getCompanyDetail(cName) {}
  async searchCompany(cName) {}
  async getAllCompany() {}
  async updateArea() {}
  async deleteUserRole(id) {}
  async onChange(name) {
    this.showButton(name);
  }
  async showButton(name) {
    if (name == 'name') {
      this.flgBtn = 'name';
    } else if (name == 'contactName') {
      this.flgBtn = 'contactName';
    } else if (name == 'designation') {
      this.flgBtn = 'designation';
    } else if (name == 'contactNumber') {
      this.flgBtn = 'contactNumber';
    } else if (name == 'handleCompanyWebHook') {
      this.flgBtn = 'handleCompanyWebHook';
    } else if (name == 'longitude') {
      this.flgBtn = 'longitude';
    } else if (name == 'latitude') {
      this.flgBtn = 'latitude';
    } else if (name == 'distance') {
      this.flgBtn = 'distance';
    } else if (name == 'subdomain') {
      this.flgBtn = 'subdomain';
    } else if (name == 'productType') {
      this.flgBtn = 'productType';
    } else if (name == 'companyLogo') {
      this.flgBtn = 'companyLogo';
    } else {
      this.flgBtn = 'webHookInOutUrl';
    }
  }
  async updateCompany() {}
  async deleteWorkAreaFromUser(id) {}
  async validateControls() {}
  async getAllActionPermission(data) {}
  async manageCompany() {
    // let modalPage = await this.modalCtrl.create({
    //   component: ManageCompanyPage,
    //   componentProps: {}
    // });
    // modalPage.onDidDismiss().then((d: any) => this.handleModalDismiss(d));
    // await modalPage.present();
  }
  async handleModalDismiss(d) {}
}
