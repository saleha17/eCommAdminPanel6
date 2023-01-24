import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageRolesComponent } from '../manage-roles/manage-roles.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;

  public listOfRoles = [
    { roleName: 'Admin' },
    { roleName: 'User' },
    { roleName: 'Customer' },
  ];
  public selectedRole = '';
  public items = [{ roleName: 'Admin' }];
  public itemsActions = [{ actionName: 'Orders', permissionName: 'read' }];
  public arrowKeyLocation = -1;
  public arrowKeyLocationAction = -1;
  public manageSelectedRole = '';
  public listOfActions: any;
  public listOfActionPermissions: any;
  public description: 'This is Admin role';
  public flagButton = '';
  public roleName = 'Admin';
  public id: any;
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
  async getRefCompanyId() {}
  async getAllRoles() {}
  setItems() {}
  async setActions() {}
  selectRole(item: any) {
    this.selectedRole = item.roleName;
    console.log('this.selectedRole', this.selectedRole);
    this.searchRole(item.roleName);
  }
  async filterActions(ev: any) {}
  keyDownActions(event: KeyboardEvent) {}
  async deleteRolePermission(rolePermission) {}
  async searchRole(roleName) {
    this.manageSelectedRole = roleName;
  }
  async addRoleActionPermission(selectedRole) {
    let role = this.listOfRoles.filter((item) => {
      if (item.roleName == selectedRole) {
        return item;
      }
    });
    console.log('role', role);
    const modal = await this.modalCtrl.create({
      component: ManageRolesComponent,
      componentProps: { role: role, type: 1 },
    });
    modal.onDidDismiss().then((d: any) => this.handleModalDismiss(d));
    return await modal.present();
  }
  async addRole() {
    const modal = await this.modalCtrl.create({
      component: ManageRolesComponent,
      componentProps: { role: '', type: 2 },
    });
    modal.onDidDismiss().then((d: any) => this.handleModalDismiss(d));
    return await modal.present();
  }
  async showButton(name) {
    if (name == 'roleName') {
      this.flagButton = 'roleName';
    } else if (name == 'description') {
      this.flagButton = 'description';
    }
  }
  async updateRole() {}
  async validateControls() {}
  async handleModalDismiss(d) {
    console.log('d', d);
  }
}
