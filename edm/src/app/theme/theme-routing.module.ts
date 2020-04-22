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
            {
                path: "geners",
                loadChildren: "../gener/gener.module#GenerModule"
            },
            {
                path: "geners/details",
                loadChildren: "../gener/gener.module#GenerModule"
            },
            {
                path: "product",
                loadChildren: "../product/product.module#ProductModule"
            },
            {
                path: "product/details",
                loadChildren: "../product/product.module#ProductModule"
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
