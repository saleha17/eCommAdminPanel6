import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public navCtrl: NavController, private router: Router) {
    // this.router.navigate(['app', 'dashboard']);
    console.log(this.companyLogo);
  }

  ngOnInit() {}
  login() {}
  forgotPassword() {}
  signUp() {
    this.navCtrl.navigateForward('signUp');
  }
}
