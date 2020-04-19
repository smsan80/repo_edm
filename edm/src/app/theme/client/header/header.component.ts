import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _base: BaseServiceHelper) { }

  ngOnInit(): void {
  }
  redirectUrl(url) {
    this._base._commonService.navigation(url);
  }
}
