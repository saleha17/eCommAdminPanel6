import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  name = '';
  contactName = '';
  contactNumber = 12345;
  handleCompanyWebHook = '';
  webHookInOutUrl = '';
  subdomain = '';
  productType = '';
  image = '';
  biometricId = '';
  email = '';
  password = '';
  constructor() {}

  ngOnInit() {}
  companySignUp() {}
}
