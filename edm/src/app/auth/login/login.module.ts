import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ]),
    ],
    providers: []
})
export class LoginModule { }
