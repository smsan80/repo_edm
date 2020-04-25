
import { Injectable } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';
import { ApiConstant } from 'src/app/_appmodel/apiconstant';
@Injectable()
export class GenerService {

    constructor(public _base: BaseServiceHelper) { }

    generList(_objGener: any) {
        return this._base._ApiService.post(ApiConstant.generDetails.generList, _objGener);
    }
}