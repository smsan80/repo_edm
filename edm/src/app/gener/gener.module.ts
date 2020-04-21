// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerComponent } from './gener.component';
import { GenerDetailsComponent } from './generdetails/generdetails.component';
@NgModule({
    declarations: [
        GenerComponent,
        GenerDetailsComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GenerComponent
            },
            {
                path: '',
                component: GenerDetailsComponent
            }
        ]),
    ],
    providers: []
})
export class GenerModule { }
