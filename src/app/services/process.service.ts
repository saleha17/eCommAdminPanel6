import { Injectable } from '@angular/core';
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

    return result;
  }
  private resolveComponentsName(actionName) {}
}
