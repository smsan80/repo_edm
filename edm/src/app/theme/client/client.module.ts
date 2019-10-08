import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientBodyComponent } from './body/body.component';
import { ClientHeaderComponent } from './header/header.component';
import { ClientFooterComponent } from './footer/footer.component';
import { IndexComponent } from '../../pages/index/index.component';
import { ProductmoduleComponent } from '../../pages/productmodule/productmodule.component';
import { ProductdetailsmoduleComponent } from '../../pages/productdetailsmodule/productdetailsmodule.component';

@NgModule({
    declarations: [
        ClientBodyComponent,
        ClientHeaderComponent,
        ClientFooterComponent,
        IndexComponent,
        ProductmoduleComponent,
        ProductdetailsmoduleComponent
    ],
    imports: [
        RouterModule,
    ],
    providers: []
})
export class ClientModule { }