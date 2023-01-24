import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-actions',
  templateUrl: './manage-actions.component.html',
  styleUrls: ['./manage-actions.component.css'],
})
export class ManageActionsComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;

  public items: any;
  public userData: any;
  public manageSelectedAction: '';
  public arrowKeyLocation = -1;
  public listOfActions: any;
  public listOfActionPermission = [{ permissionName: 'Read' }];
  public selectedAction: '';
  public description: '';
  public username: '';

  constructor() {}

  ngOnInit() {}
  async getUserData() {}
  setItems() {}
  manageActionForPermission(item: any) {}
  async searchManageActionForPermission(aName: any) {}
  async getAllActions() {}
  logout() {}
}
