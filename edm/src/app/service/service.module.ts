import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './servicedetails/servicedetails.component';
import { ServiceComponent } from './service.component';
@NgModule({
    declarations: [
        ServiceComponent,
        ServiceDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ServiceComponent
            },
            {
                path: 'details',
                component: ServiceDetailsComponent
            }
        ]),
    ],
    providers: []
})
export class ServiceModule { }
