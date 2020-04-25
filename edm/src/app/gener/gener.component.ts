import { Component, OnInit } from '@angular/core';
import { GenerService } from './_service/gener.service';
import { Helpers } from '../_appModel/helpers';
import { generModel } from './_model/gener.model';

@Component({
  selector: 'app-gener',
  templateUrl: './gener.component.html',
  styleUrls: ['./gener.component.scss']
})
export class GenerComponent implements OnInit {

  constructor(private _generService: GenerService) { }

  public generListData: any;
  _generModel: generModel = {};
  ngOnInit(): void {
    this.generList();
  }

  generList() {
    this._generModel.Flag = "GENERLIST"
    this._generService.generList(this._generModel).subscribe(data => {
      this.generListData = data;
      console.log("this.generListData", this.generListData);
      Helpers.setLoading(false);
    }, error => {
      Helpers.setLoading(false);
    });
  }

}
