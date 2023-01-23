import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ProcessActionComponent } from '../../components/processAction';
import { ProcessService } from '../../services/process.service';

@Component({
  selector: 'app-action-window',
  templateUrl: './action-window.component.html',
  styleUrls: ['./action-window.component.css'],
})
export class ActionWindowComponent implements OnInit {
  @ViewChild('processContainer', { read: ViewContainerRef }) container;
  public username: any;
  public actionName: any;
  public userData: any;
  public userName: any;

  constructor(
    private processService: ProcessService,
    private resolver: ComponentFactoryResolver,
    public storage: Storage
  ) {}

  ngOnInit() {
    let actions = this.processService.getProcessName();
    for (let action of actions) {
      const factory = this.resolver.resolveComponentFactory(action.component);
      let componentRef = this.container.createComponent(factory);
      (<ProcessActionComponent>componentRef.instance).data = action.desc;
      (<ProcessActionComponent>componentRef.instance).cid = action.cid;
      this.actionName = action.desc;
    }
  }
  logout() {}
}
