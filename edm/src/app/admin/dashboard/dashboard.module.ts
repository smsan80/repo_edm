// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [        
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ]),
    ],
    providers: []
})
export class DashboardModule { }
