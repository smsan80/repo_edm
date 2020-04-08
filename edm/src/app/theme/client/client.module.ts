import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientBodyComponent } from './body/body.component';
import { ClientHeaderComponent } from './header/header.component';
import { ClientFooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        ClientBodyComponent,
        ClientHeaderComponent,
        ClientFooterComponent,
    ],
    imports: [
        RouterModule,
    ],
    providers: []
})
export class ClientModule { }