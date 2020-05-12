import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './client/body/body.component';
import { AdminBodyComponent } from './admin/body/body.component';

const routes: Routes = [
    {
        path: "",
        component: BodyComponent,
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
            {
                path: "error/404",
                loadChildren: "../errors/errors.module#ErrorsModule"
            },
            {
                path: "service",
                loadChildren: "../service/service.module#ServiceModule"
            },
            {
                path: "service/details",
                loadChildren: "../service/service.module#ServiceModule"
            },
            {
                path: "profile",
                loadChildren: "../profiles/profile.module#ProfileModule"
            }
        ],
    },
    {
        path: "admin",
        component: AdminBodyComponent,
        children: [
            {
                path: "",
                loadChildren: "../admin/dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "gener",
                loadChildren: "../admin/geners/geners.module#GenersModule"
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
