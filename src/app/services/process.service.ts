import { Injectable } from '@angular/core';
import { CompanyComponent } from '../components/actions/company/company.component';
import { ManageActionsComponent } from '../components/actions/manage-actions/manage-actions.component';
import { ManageDesignationComponent } from '../components/actions/manage-designation/manage-designation.component';
import { ProductParameterMasterComponent } from '../components/actions/product-parameter-master/product-parameter-master.component';
import { RolesComponent } from '../components/actions/roles/roles.component';
import { UserComponent } from '../components/actions/user/user.component';
import { ProcessActionItem } from '../components/processActionItem';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {
  private actionName: string;
  private companyId: string;

  constructor() {}
  setActionName(actionName) {
    this.actionName = actionName;
  }

  setCompanyId(cid) {
    this.companyId = cid;
  }
  getProcessName(): ProcessActionItem[] {
    let result: ProcessActionItem[] = [];

    let comp: any = this.resolveComponentsName(this.actionName);
    let newItem = new ProcessActionItem(comp, this.actionName, this.companyId);
    result.push(newItem);
    console.log('**', result);
    return result;
  }
  private resolveComponentsName(actionName) {
    if (actionName == 'Roles') {
      return RolesComponent;
    } else if (actionName == 'Manage Actions') {
      return ManageActionsComponent;
    } else if (actionName == 'Users') {
      return UserComponent;
    } else if (actionName == 'Company') {
      return CompanyComponent;
    } else if (actionName == 'Designation') {
      return ManageDesignationComponent;
    } else if (actionName == "Product Parameter Master") {
      return ProductParameterMasterComponent;
    } 
  }
}
