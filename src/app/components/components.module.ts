import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RolesComponent } from './actions/roles/roles.component';
import { SplitPaneItemComponent } from './split-pane-item/split-pane-item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ManageRolesComponent } from './actions/manage-roles/manage-roles.component';
import { ManageActionsComponent } from './actions/manage-actions/manage-actions.component';
import { UserComponent } from './actions/user/user.component';
import { ManageUserComponent } from './actions/manage-user/manage-user.component';
import { IonicSelectSearchableComponent } from './ionic-select-searchable/ionic-select-searchable.component';
import { CompanyComponent } from './actions/company/company.component';
import { AccordionModule } from 'ngx-accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    AccordionModule,
  ],
  declarations: [
    RolesComponent,
    SplitPaneItemComponent,
    ManageRolesComponent,
    ManageActionsComponent,
    UserComponent,
    ManageUserComponent,
    IonicSelectSearchableComponent,
    CompanyComponent,
  ],
  entryComponents: [
    RolesComponent,
    SplitPaneItemComponent,
    ManageRolesComponent,
    ManageActionsComponent,
    UserComponent,
    ManageUserComponent,
    IonicSelectSearchableComponent,
    CompanyComponent,
  ],
})
export class ComponentsModule {}
