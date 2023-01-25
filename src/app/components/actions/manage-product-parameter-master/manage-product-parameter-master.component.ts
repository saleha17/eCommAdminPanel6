import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-manage-product-parameter-master',
  templateUrl: './manage-product-parameter-master.component.html',
  styleUrls: ['./manage-product-parameter-master.component.scss'],
})
export class ManageProductParameterMasterComponent implements OnInit {
  public isModal: any;
  public name = '';
  public value = '';
  public productParameterId = '';
  public ProductParamName = '';
  public item: any;
  public id: any;
  public refCompanyId: any;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.isModal = this.navParams.get('flagModal');
    this.productParameterId = this.navParams.get('id');
    this.ProductParamName = this.navParams.get('ProductParamName');
    this.item = this.navParams.get('item');
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  async saveValue() {}
  async updateValue() {}
  async addNewParam() {}
  async validateControls() {}
  resetForm() {}
}
