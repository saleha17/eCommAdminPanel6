import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-actions',
  templateUrl: './manage-actions.component.html',
  styleUrls: ['./manage-actions.component.css'],
})
export class ManageActionsComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;

  public items = [{ actionName: 'Manage Users' }];
  public userData: any;
  public manageSelectedAction: '';
  public arrowKeyLocation = -1;
  public listOfActions: any;
  public listOfActionPermission = [{ permissionName: 'Read' }];
  public selectedAction = 'ManageUsers';
  public description = 'This is Read Permisssion';
  public username = 'Saleha';

  constructor() {}

  ngOnInit() {}
  async getUserData() {}
  setItems() {}
  manageActionForPermission(item: any) {
    this.searchManageActionForPermission(item.actionName);
  }
  async searchManageActionForPermission(aName: any) {
    this.selectedAction = aName;
    this.manageSelectedAction = aName;
  }
  async getAllActions() {}
  logout() {}
}
