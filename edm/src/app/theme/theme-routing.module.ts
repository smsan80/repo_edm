
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './client/body/body.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';

const routes: Routes = [
    {
        "path": "",
        "component": BodyComponent,
        "children": [
            {
                "path": "",
                component: HomeComponent
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "signup",
                component: SignupComponent
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
