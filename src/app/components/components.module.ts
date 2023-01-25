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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ManageCompanyComponent } from './actions/manage-company/manage-company.component';
import { ManageDesignationComponent } from './actions/manage-designation/manage-designation.component';
import { ProductParameterMasterComponent } from './actions/product-parameter-master/product-parameter-master.component';
import { ManageProductParameterMasterComponent } from './actions/manage-product-parameter-master/manage-product-parameter-master.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
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
    ManageCompanyComponent,
    ManageDesignationComponent,
    ProductParameterMasterComponent,
    ManageProductParameterMasterComponent,
  ],
  entryComponents: [SplitPaneItemComponent, IonicSelectSearchableComponent],
})
export class ComponentsModule {}
