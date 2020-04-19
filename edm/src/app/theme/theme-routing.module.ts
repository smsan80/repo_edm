import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';

const routes: Routes = [
    {
        path: "",
        component: ThemeComponent,
        children: [
            {
                path: "home",
                loadChildren: "../home/home.module#HomeModule"
            },
            {
                path: "login",
                loadChildren: "../auth/login/login.module#LoginModule"
            },
            {
                path: "signup",
                loadChildren: "../auth/signup/signup.module#SignUpModule"
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
