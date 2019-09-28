import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientBodyComponent } from './client/body/body.component';
import { AdminBodyComponent } from './admin/body/body.component';
import { IndexComponent } from '../pages/index/index.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ThemeModule } from './theme.module';

const routes: Routes = [
    {
        path: "",
        component: ClientBodyComponent
    },
    {
        path: "admin",
        component: AdminBodyComponent
    }
];

@NgModule({
    imports: [ThemeModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }