// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailsComponent
    ],
    imports: [        
        CommonModule,
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
