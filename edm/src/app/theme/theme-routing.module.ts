import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientBodyComponent } from './client/body/body.component';
import { AdminBodyComponent } from './admin/body/body.component';
import { IndexComponent } from '../pages/index/index.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ThemeModule } from './theme.module';
import { ProductmoduleComponent } from '../pages/productmodule/productmodule.component';
import { ProductdetailsmoduleComponent } from '../pages/productdetailsmodule/productdetailsmodule.component';

const routes: Routes = [
    {
        path: "",
        component: ClientBodyComponent,
        children: [
            { path: '', component: IndexComponent },
            { path: 'product', component: ProductmoduleComponent },
            { path: 'productdetails', component: ProductdetailsmoduleComponent }
        ]
    },
    {
        path: "admin",
        component: AdminBodyComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [ThemeModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }