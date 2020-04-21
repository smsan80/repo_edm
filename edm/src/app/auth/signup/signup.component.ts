import { Component, OnInit } from '@angular/core';
import { BaseServiceHelper } from 'src/app/_appService/baseHelper.service';
import { userModel } from 'src/app/_appModel/customer.model';
import { NgForm } from '@angular/forms';
import { enAppSession } from 'src/app/_appModel/enAppSession';
import { RegisterService } from 'src/app/_appService/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private _base: BaseServiceHelper,
    public _registerService: RegisterService) { }
  _userModel: userModel = {};
  public submitted: boolean = false;
  ngOnInit(): void {
  }
  signIn() {
    this._base._commonService.navigation('login');
  }
  register(formSignUp: NgForm) {
    debugger
    this.submitted = true;
    if (formSignUp.valid) {
      if (this._userModel.Password == this._userModel.RePassword) {
        this._base._encryptedStorage.get(enAppSession.IsGuestUser).then(IsGuestUser => {
          this._base._encryptedStorage.get(enAppSession.Ref_User_ID).then(Ref_User_ID => {
            this._userModel.Ref_User_Id = Ref_User_ID;
            this._userModel.CreatedBy = Ref_User_ID;
            this._userModel.UpdatedBy = Ref_User_ID;
            this._userModel.IsGuestUser = IsGuestUser;
            debugger
            this._registerService.registerCustomer(this._userModel).subscribe(response => {
              this._base._encryptedStorage.set(enAppSession.IsGuestUser, false);
              if (response[0].Response == 'USERADDEDSUCCESSFULLY') {
                this._userModel.User_Code = this._userModel.Email;
                console.log('response', response);
                this._registerService.loginCustomer(this._userModel).subscribe(res => {
                  if (res[0].Response == 'SUCCESS') {
                    let responseData = res[0];
                    // this._base._CommonService.showAlert("Registered success!", false);
                    // this._base._AppSessionService.setUserSession(responseData);
                    // this._communicationModel = {
                    //   Recipients: responseData.Email,
                    //   TemplateSelector: 'WELCOME_EMAIL',
                    //   KeyValues: 'STORE_NAME|PickPro,CUSTOMER_NAME|' + responseData.FullName + ',STORE_EMAIL|info@webdroids.in'
                    // }
                    // this._communication.sendWelcomeMail(this._communicationModel).subscribe((res: any) => {
                    // })
                    setTimeout(() => {
                      //this._events.publish('user:signedIn', responseData);
                    }, 1000);
                  } else {
                    // this._base._vibration.vibrate(100);
                    // this._base._CommonService.showAlert("Please try after sometime!", false);
                  }
                });
              } else if (response[0].Response == 'USERALREADYEXISTS') {
                // this._base._vibration.vibrate(100);
                // this._base._CommonService.showAlert("User already exits!", false);
              }
              else {
                // this._base._vibration.vibrate(100);
                // this._base._CommonService.showAlert("Please try after sometime!", false);
              }
            });
          });
        });
      } else {
        // this._base._vibration.vibrate(100);
        // this._base._CommonService.showAlert("Password and Re-Password does not matched. Please try again later!", false, 3000);
      }
    }
  }
  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
