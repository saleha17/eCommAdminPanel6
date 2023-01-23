import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;

  public listOfRoles: any;
  public selectedRole = '';
  public items: any;
  public itemsActions: any;
  public arrowKeyLocation = -1;
  public arrowKeyLocationAction = -1;
  public manageSelectedRole = '';
  public listOfActions: any;
  public listOfActionPermissions: any;
  public description: '';
  public flagButton = '';
  public roleName = '';
  public id: any;
  constructor() {}

  ngOnInit() {}
  async getRefCompanyId() {}
  async getAllRoles() {}
  setItems() {}
  async setActions() {}
  selectRole(item: any) {}
  async filterActions(ev: any) {}
  keyDownActions(event: KeyboardEvent) {}
  async deleteRolePermission(rolePermission) {}
  async searchRole(roleName) {}
  async addRoleActionPermission(selectedRole) {}
  async addRole() {}
  async showButton(name) {}
  async updateRole() {}
  async validateControls() {}
}
