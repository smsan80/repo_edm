import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';

@Component({
  selector: 'appAdmin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private _base: BaseServiceHelper) { }
  hasLogin: boolean = false;
  ngOnInit(): void {
    
  }
 
}
