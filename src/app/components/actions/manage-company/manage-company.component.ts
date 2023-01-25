import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss'],
})
export class ManageCompanyComponent implements OnInit {
  public name = '';
  public contactName = '';
  public contactNumber = '';
  public webHookInOutUrl = '';
  public handleCompanyWebHook = '';
  public priorityBase = 0;
  public subdomain = '';
  public productType = '';
  public companyLogo = '';
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  async createCompany() {}
  async validateControls() {}
  closeModal() {
    this.modalCtrl.dismiss();
  }
  resetForm() {}
}
