// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailsComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProductComponent
            },
            {
                path: 'details',
                component: ProductDetailsComponent
            }
        ]),
    ],
    providers: []
})
export class ProductModule { }
