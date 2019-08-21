import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component';
import { ClientBodyComponent } from '../theme/client/body/body.component';
import { ClientHeaderComponent } from '../theme/client/header/header.component';
import { ClientFooterComponent } from '../theme/client/footer/footer.component';
import { AdminBodyComponent } from '../theme/admin/body/body.component';
import { AdminHeaderComponent } from '../theme/admin/header/header.component';
import { AdminFooterComponent } from '../theme/admin/footer/footer.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';

@NgModule({
    declarations: [
        ClientBodyComponent,
        ClientHeaderComponent,
        ClientFooterComponent,
        AdminBodyComponent,
        AdminHeaderComponent,
        AdminFooterComponent,
        IndexComponent,
        DashboardComponent
        // SidebarComponent
    ],
    imports: [
        RouterModule
    ],
    providers: []
})
export class ThemeModule { }