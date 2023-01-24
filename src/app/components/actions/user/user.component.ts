import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;
  @Input() deletedUsers: any;

  public getAllUserData: any;
  public manageSelectedUser: '';
  public selectedUser: '';
  public items: any;
  public id: any;
  public arrowKeyLocation = -1;
  public fullName = '';
  public mobileNumber = '';
  public email: '';
  public companyName = '';
  public listOfRoles: any = [];
  public listOfArea: any = [];
  public flgBtn = '';
  public appName = '';
  public userData: any;
  public username = '';
  public getDesignationList: any = [];
  public getDepartmentList: any = [];

  // public parentNo: any;
  public designation = '';
  public department = '';
  public oldUsername = '';
  public biometricId = '';
  public tempUserName = '';
  public listOfActions: any;
  public deletionAllow: any;
  public isDeleted = 0;
  public image = '';
  public offset = 0;
  public limit = 10;
  public refCompanyId = false;
  public userType = '';
  constructor() {}

  ngOnInit() {}
  async getAllDesignation(desc) {}
  async getAllDepartment(desc) {}
  getAppName() {}
  async getCompanyId() {}
  setItems() {}
  getUserDetail(username) {}
  async searchUser(user) {}
  async getAllUser(pNo) {}
  async fetchUsersByPagination(val) {}
  async filterItems(ev: any) {}
  async addRoleForUser(id, flgModal) {}
  async handleModalDismiss(d) {}
  async deleteUserRole(id) {}
  async onChange(name) {}
  async showButton(name) {
    if (name == 'userName') {
      this.flgBtn = 'userName';
    } else if (name == 'email') {
      this.flgBtn = 'email';
    } else if (name == 'designation') {
      this.flgBtn = 'designation';
    } else if (name == 'department') {
      this.flgBtn = 'department';
    } else if (name == 'biometricId') {
      this.flgBtn = 'biometricId';
    } else {
      this.flgBtn = 'fullName';
    }
  }
  async updateUser() {}
  async deleteWorkAreaFromUser(id) {}
  async validateControls() {}
  async getAllActions() {}
  async deleteOrActivate() {}
}
