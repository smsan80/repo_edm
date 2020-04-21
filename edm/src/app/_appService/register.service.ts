import { Injectable } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';
import { ApiConstant } from 'src/app/_appmodel/apiconstant';

@Injectable()
export class RegisterService {

    constructor(private _BaseServiceHelper: BaseServiceHelper) {

    }
    registerCustomer(_customer: any) {
        return this._BaseServiceHelper._ApiService.post(ApiConstant.customer.registerCustomer, _customer);
    }
    loginCustomer(_customer: any) {
        return this._BaseServiceHelper._ApiService.post(ApiConstant.customer.signIn, _customer);
    }
    validateUser(UserCode: string) {
        var params = "?UserCode=" + UserCode;
        return this._BaseServiceHelper._ApiService.get(ApiConstant.customer.validateUser + params);
    }
    forgotPassword(flag: string, ref_user_id: number, password: number) {
        var params = "?Flag=" + flag;
        params += "&Ref_User_ID=" + ref_user_id;
        params += "&Password=" + password;
        return this._BaseServiceHelper._ApiService.post(ApiConstant.customer.forgotPassword + params);
    }
    requestOTP(requestOTP: any) {
        return this._BaseServiceHelper._ApiService.post(ApiConstant.customer.requestOTP, requestOTP);
    }

}