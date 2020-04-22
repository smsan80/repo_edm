import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';
import { enAppSession } from 'src/app/_appModel/enAppSession';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _base: BaseServiceHelper) { }
  hasLogin: boolean = false;
  ngOnInit(): void {
    this._base._encryptedStorage.get(enAppSession.HasLogin).then(HasLogin => {
      this.hasLogin = HasLogin;
    });
  }
  redirectUrl(url) {
    this._base._commonService.navigation(url);
  }
}
