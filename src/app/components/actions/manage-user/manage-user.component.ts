import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  public allRoles: any = [];
  public roleId: any;
  public id: any;
  public isModal: any;
  public name: any;

  //Add new User
  public username = '';
  public password = '';
  public companyName = 'atishae';
  public appName = '';
  public fullName = '';
  public mobileNumber = '';
  public email = '';
  public getAllWorkArea: any;
  public getDesignationList: any = [];
  public getDepartmentList: any = [];
  public getAllUserData: any;
  public designation = '';
  public department = '';
  public biometricId = '';
  public areaIdsList = [];
  public refCompanyId: any;

  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.isModal = this.navParams.get('flgModal');
  }
  async getWorkArea() {}
  async getAllDesignation() {}
  async getAllDepartment() {}
  closeModal() {
    // this.modalCtrl.dismiss(this.isModal);
  }
  async getAllRole() {}
  async createUser() {}
  async saveRoleForUser() {}
  async createWorkArea() {}
  async validateControls() {}
  resetForm() {}
}
