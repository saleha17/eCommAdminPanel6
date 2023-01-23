import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  companyLogo = '';
  username = '';
  password = '';

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
  login() {}
  forgotPassword() {}
  signUp() {
    this.navCtrl.navigateForward('signUp');
  }
}
