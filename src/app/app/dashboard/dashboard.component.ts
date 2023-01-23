import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName = 'Saleha';
  companyLogo = '';
  selectedAction = 'Actions';
  items = [
    { actionName: 'Manage Users' },
    { actionName: 'Roles' },
    { actionName: 'Actions' },
  ];
  constructor() {}

  ngOnInit() {}
  logout() {}
  filterItems(arg: any) {}
  searchAction() {}
  keyDown(event: any) {}
  selectAction(arg1: any, arg2: any) {}
}
