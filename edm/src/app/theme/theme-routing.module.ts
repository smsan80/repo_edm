import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientBodyComponent } from './client/body/body.component';
import { AdminBodyComponent } from './admin/body/body.component';

const routes: Routes = [
    {
        "path": "",
        "component": ClientBodyComponent,
        "children": [
            {
                "path": "home",
                "loadChildren": "..\/pages\/index\/index.module#IndexModule"
            }]
    },
    {
        "path": "admin",
        "component": AdminBodyComponent,
        "children": [
            {
                "path": "dashboard",
                "loadChildren": "..\/pages\/index\/index.module#IndexModule"
            }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }