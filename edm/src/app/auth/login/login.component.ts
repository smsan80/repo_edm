import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _base: BaseServiceHelper) { }

  ngOnInit(): void {
  }
  signUp() {
    this._base._commonService.navigation('signup');
  }
}
