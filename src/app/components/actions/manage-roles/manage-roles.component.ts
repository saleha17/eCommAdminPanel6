import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss'],
})
export class ManageRolesComponent implements OnInit {
  public roleDetails: any;
  public type: any;
  public roleName: any;
  public newRoleName: any;
  public description: any;
  public title: String;
  public listOfActions: any;
  public listOfActionsPermissions: any;
  public selectedActionName: any;
  public selectedPermissionName: any;
  constructor(public navParams: NavParams, public modalCtrl: ModalController) {
    this.roleDetails = this.navParams.get('role');
    this.type = this.navParams.get('type');
    if (this.roleDetails.length > 0) {
      this.roleName = this.roleDetails[0].roleName;
    }
    if (this.type == '1') {
      this.title = 'Add new Role Permission';
    } else {
      this.title = 'Add Role';
    }
    console.log('role details', this.roleDetails, this.type);
  }

  ngOnInit() {}
  public closeModal() {
    this.modalCtrl.dismiss();
  }
  onActionSelect() {
    console.log(this.selectedActionName);
    if (this.selectedActionName != '') {
      console.log(this.listOfActions);
      this.listOfActionsPermissions = this.listOfActions.filter((action) => {
        if (action.actionName == this.selectedActionName) {
          return action.actionPermission;
        }
      });
      console.log(this.listOfActionsPermissions);
      if (this.listOfActionsPermissions[0].actionPermission.length > 0) {
        this.listOfActionsPermissions =
          this.listOfActionsPermissions[0].actionPermission;
        console.log(
          'list of action permissions',
          this.listOfActionsPermissions
        );
      } else {
        this.listOfActionsPermissions = [];
      }
    }
  }
  async getAllActions() {}
  async addRoleActionPermission() {}
  async addRole() {}
  async validateControls() {}
  async resetControls() {}
}
