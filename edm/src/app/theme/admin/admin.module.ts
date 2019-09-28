import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBodyComponent } from './body/body.component';
import { AdminHeaderComponent } from './header/header.component';
import { AdminFooterComponent } from './footer/footer.component';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
@NgModule({
    declarations: [
        AdminBodyComponent,
        AdminHeaderComponent,
        AdminFooterComponent,
        DashboardComponent
    ],
    imports: [
        RouterModule,
    ],
    providers: []
})
export class AdminModule { }