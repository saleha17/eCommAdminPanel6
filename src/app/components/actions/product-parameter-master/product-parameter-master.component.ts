import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageProductParameterMasterComponent } from '../manage-product-parameter-master/manage-product-parameter-master.component';

@Component({
  selector: 'app-product-parameter-master',
  templateUrl: './product-parameter-master.component.html',
  styleUrls: ['./product-parameter-master.component.scss'],
})
export class ProductParameterMasterComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;

  public getAllProductParam: any;
  public items = [{ name: 'Color' }, { name: 'Model' }];
  public itemsValue: any;
  public arrowKeyLocation = 0;
  public arrowKeyLocationValue = 0;
  public selectedMaster = '';
  public manageSelectedMaster = '';
  public listOfValue = [];
  public productData: any;
  public id: any;
  public valueSearch = '';
  public name = '';
  public flgBtn = '';

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
  setItems() {}
  async getAllProductParameter() {}
  getProductMasterDetail(name) {
    this.manageSelectedMaster = name;
    this.selectedMaster = name;
  }
  async searchProductMaster(name) {}
  setValues() {}
  async filterValues(ev: any) {}
  keyDownValues(event: KeyboardEvent) {}
  async updateProductParamName() {}
  async deleterParamValue(id) {}
  async openModal(item, flagModal) {
    let modalPage = await this.modalCtrl.create({
      component: ManageProductParameterMasterComponent,
      componentProps: {
        id: this.id,
        item: item,
        ProductParamName: this.selectedMaster,
        flagModal: flagModal,
      },
    });
    modalPage.onDidDismiss().then((d: any) => this.handleModalDismiss(d));
    await modalPage.present();
  }
  async handleModalDismiss(d) {}
  async showButton(name) {
    if (name == 'productParamName') {
      this.flgBtn = 'productParamName';
    }
  }
  async validateControls() {}
}
