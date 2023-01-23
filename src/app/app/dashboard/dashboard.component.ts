import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProcessService } from '../../services/process.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName = 'Saleha';
  companyLogo = 'assets/logo/atisaheLogo.png';
  selectedAction = 'Actions';
  items = [
    { actionName: 'Roles' },
    { actionName: 'Manage Actions' },
    { actionName: 'Users' },
    { actionName: 'Company' },
    { actionName: 'Designation' },
    { actionName: 'Product Parameter Master' },
    { actionName: 'Products' },
    { actionName: 'Tags' },
    { actionName: 'Product Collections' },
    { actionName: 'Cart' },
    { actionName: 'Customer' },
    { actionName: 'Orders' },
    { actionName: 'Pending Orders' },
    { actionName: 'Order Dispatch' },
    { actionName: 'Delete Users' },
    { actionName: 'Pricing' },
    { actionName: 'Department' },
  ];
  public listOfActions = [
    { actionName: 'Roles' },
    { actionName: 'Manage Actions' },
    { actionName: 'Users' },
    { actionName: 'Company' },
    { actionName: 'Designation' },
    { actionName: 'Product Parameter Master' },
    { actionName: 'Products' },
  ];
  public arrowKeyLocation = -1;

  constructor(
    public processService: ProcessService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}
  logout() {}
  filterItems(arg: any) {}
  async searchAction() {
    console.log('search action', this.selectedAction);
    let tmpSelectedAction = this.selectedAction;
    let actionExist = this.listOfActions.filter(function (action) {
      if (action.actionName == tmpSelectedAction) {
        return action;
      }
    });
    console.log('actionExist', actionExist, typeof actionExist);
    if (actionExist.length > 0) {
      this.processService.setActionName(tmpSelectedAction);
      let refCompanyId = 1;
      this.processService.setCompanyId(refCompanyId);
      // this.router.navigate(['app', 'actionsWindow']);
      this.navCtrl.navigateForward('app/actionsWindow');
      this.items = [];
      this.arrowKeyLocation = -1;
    }
  }
  keyDown(event: any) {}
  selectAction(arg1: any, item: any) {
    this.selectedAction = item.actionName;
  }
}
