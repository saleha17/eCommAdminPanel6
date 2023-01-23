import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RolesComponent } from './actions/roles/roles.component';
import { SplitPaneItemComponent } from './split-pane-item/split-pane-item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NgxDatatableModule],
  declarations: [RolesComponent, SplitPaneItemComponent],
  entryComponents: [RolesComponent, SplitPaneItemComponent],
})
export class ComponentsModule {}
