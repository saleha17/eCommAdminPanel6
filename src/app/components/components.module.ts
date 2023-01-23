import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RolesComponent } from './actions/roles/roles.component';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [RolesComponent],
  entryComponents: [RolesComponent],
})
export class ComponentsModule {}
