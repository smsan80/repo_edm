// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourZeroFourComponent } from './404/404.component';
@NgModule({
    declarations: [
        FourZeroFourComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '404',
                component: FourZeroFourComponent
            }
        ]),
    ],
    providers: []
})
export class ErrorsModule { }
