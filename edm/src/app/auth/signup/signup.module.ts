import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SignupComponent
            }
        ]),
    ],
    providers: []
})
export class SignUpModule { }
