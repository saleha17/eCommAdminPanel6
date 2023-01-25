import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  closeModal() {
    this.modalCtrl.dismiss();
  }
  async saveValue() {}
  async updateValue() {}
  async addNewParam() {}
  async validateControls() {}
  resetForm() {}
}
