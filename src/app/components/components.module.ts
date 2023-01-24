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
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    IonicSelectableModule,
  ],
  declarations: [
    RolesComponent,
    SplitPaneItemComponent,
    ManageRolesComponent,
    ManageActionsComponent,
    UserComponent,
    ManageUserComponent,
  ],
  entryComponents: [RolesComponent, SplitPaneItemComponent],
})
export class ComponentsModule {}
