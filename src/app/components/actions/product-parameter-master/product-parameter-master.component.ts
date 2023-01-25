import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
  setItems() {}
  async getAllProductParameter() {}
  getProductMasterDetail(name) {}
  async searchProductMaster(name) {
    this.manageSelectedMaster = name;
    this.selectedMaster = name;
  }
  setValues() {}
  async filterValues(ev: any) {}
  keyDownValues(event: KeyboardEvent) {}
  async updateProductParamName() {}
  async deleterParamValue(id) {}
  async openModal(item, flagModal) {}
  async handleModalDismiss(d) {}
  async showButton(name) {
    if (name == 'productParamName') {
      this.flgBtn = 'productParamName';
    }
  }
  async validateControls() {}
}
