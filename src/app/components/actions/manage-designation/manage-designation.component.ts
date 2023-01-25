import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-designation',
  templateUrl: './manage-designation.component.html',
  styleUrls: ['./manage-designation.component.scss'],
})
export class ManageDesignationComponent implements OnInit {
  public listOfDesignation: any;
  public items = [
    { name: 'Admin', id: 1 },
    { name: 'Customer', id: 2 },
  ];
  public manageSelectedDesignation = '';

  public selectedDesignation = '';
  public itemsActions: any;
  public listOfActions: any;
  public listOfActionPermissions: any;
  public description: '';
  public flagButton = '';
  public id: any;
  public DesignationName: any;
  public SortName: any;
  public priority: any;
  public parentsId: any = '';
  public updateButton: any = false;
  public refCompanyId: any;
  constructor() {}

  ngOnInit() {}
  async getRefCompanyId() {}
  async getAllDesignation() {}
  setItems() {}
  async showButton(name) {
    console.log('call');
    if (name == 'DesignationName') {
      this.flagButton = 'DesignationName';
    } else if (name == 'SortName') {
      this.flagButton = 'SortName';
    } else if (name == 'priority') {
      this.flagButton = 'priority';
    } else if (name == 'parentsId') {
      this.flagButton = 'parentsId';
    }
  }
  async updateDesignation() {}
  async searchDesignation(DesignationName) {
    if (DesignationName) {
      DesignationName = DesignationName.name;
    } else {
      DesignationName = this.manageSelectedDesignation;
    }
    this.selectedDesignation = DesignationName.name;

    this.updateButton = false;
    this.flagButton = null;
  }
  async NewDesignation() {}
}
