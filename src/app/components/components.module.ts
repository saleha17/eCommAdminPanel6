import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RolesComponent } from './actions/roles/roles.component';
import { SplitPaneItemComponent } from './split-pane-item/split-pane-item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ManageRolesComponent } from './actions/manage-roles/manage-roles.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NgxDatatableModule],
  declarations: [RolesComponent, SplitPaneItemComponent, ManageRolesComponent],
  entryComponents: [RolesComponent, SplitPaneItemComponent],
})
export class ComponentsModule {}
