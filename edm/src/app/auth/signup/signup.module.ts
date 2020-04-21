import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/_appService/register.service';
@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SignupComponent
            }
        ]),

    ],
    providers: [RegisterService]
})
export class SignUpModule { }
