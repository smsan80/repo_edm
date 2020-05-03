import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';

@Component({
  selector: 'appAdmin-addmodifygener',
  templateUrl: './addmodifygener.component.html',
  styleUrls: ['./addmodifygener.component.scss']
})
export class AddModifyGenersComponent implements OnInit {

  constructor(public _base: BaseServiceHelper) { }

  ngOnInit(): void {
  
  }

 
}
