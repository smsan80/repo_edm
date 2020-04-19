import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _base: BaseServiceHelper) { }

  ngOnInit(): void {
  }
  signIn() {
    this._base._commonService.navigation('login');
  }
}
