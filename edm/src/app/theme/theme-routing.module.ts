
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './client/body/body.component';
import { HomeComponent } from '../home/home.component';
import { AuthComponent } from '../auth/auth.component';

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
                component: AuthComponent
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
